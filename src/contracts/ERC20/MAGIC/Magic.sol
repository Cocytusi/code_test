// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/draft-ERC20PermitUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20CappedUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

import "../extensions/ERC20BurnableUpgradeable.sol";
import "../../utils/TokenConstants.sol";
import "../interfaces/IStandardERC20.sol";

/**
* @title Magic v1.1.0
* @author @DirtyCajunRice
*/
contract Magic is Initializable, ERC20Upgradeable, PausableUpgradeable, AccessControlUpgradeable,
ERC20PermitUpgradeable, ERC20CappedUpgradeable, ERC20BurnableUpgradeable, TokenConstants, IStandardERC20 {

    address public bridgeContract;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize() public initializer {
        __ERC20_init("Magic", "MAGIC");
        __Pausable_init();
        __AccessControl_init();
        __ERC20Permit_init("Magic");
        __ERC20Capped_init(100_000_000 ether);
        __ERC20Burnable_init();

        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(ADMIN_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
    }

    // Owner Functions

    /**
    * @notice Pause token upgrades and transfers
    *
    * @dev Allows the owner of the contract to stop the execution of
    *      upgradeAll and transferFrom functions
    */
    function pause() external onlyRole(ADMIN_ROLE) {
        _pause();
    }

    /**
    * @notice Unpause token upgrades and transfers
    *
    * @dev Allows the owner of the contract to resume the execution of
    *      upgradeAll and transferFrom functions
    */
    function unpause() external onlyRole(ADMIN_ROLE) {
        _unpause();
    }

    function mint(address account, uint256 amount) public onlyRole(MINTER_ROLE) {
        _mint(account, amount);
    }

    function mint(address account, uint256 amount, bytes memory) public onlyRole(MINTER_ROLE) {
        _mint(account, amount);
        unBurn(amount);
    }

    /// Overrides

    /**
    * @dev Required override for _mint because both ERC20Capped and
    * ERC20 have the same function, so the derived contract must
    * override it
    *
    * @param account Address of the account to send Cosmic to
    * @param amount Quantity of Cosmic to mint
    */
    function _mint(address account, uint256 amount) internal virtual override(ERC20Upgradeable, ERC20CappedUpgradeable) {
        require(super.totalSupply() + super.totalBurned() + amount <= cap(), "ERC20Capped: cap exceeded");
        super._mint(account, amount);
    }

    function burn(uint256 amount) public virtual override(ERC20BurnableUpgradeable) {
        super.burn(amount);
    }

    function burn(address to, uint256 amount) public virtual override(IStandardERC20) onlyRole(MINTER_ROLE) {
       super.burnFrom(to, amount);
    }

    function bridgeExtraData() external pure returns(bytes memory) {
        return "";
    }

    function setBridgeContract(address _address) external onlyRole(ADMIN_ROLE) {
        bridgeContract = _address;
        _grantRole(MINTER_ROLE, _address);
    }

    /**
    * @dev Required override for _beforeTokenTransfer because both
    * ERC20Pausable and ERC20 have the same function, so the derived
    * contract must override it
    *
    * @param from Address of the sender
    * @param to Address of the recipient
    * @param amount Amount of Cosmic to transfer
    */
    function _beforeTokenTransfer(address from, address to, uint256 amount)
    internal whenNotPaused override(ERC20Upgradeable) {
        super._beforeTokenTransfer(from, to, amount);
    }

    function supportsInterface(bytes4 interfaceId) public view override(AccessControlUpgradeable, IERC165Upgradeable) returns (bool)
    {
        return interfaceId == type(IStandardERC20).interfaceId || super.supportsInterface(interfaceId);
    }
}