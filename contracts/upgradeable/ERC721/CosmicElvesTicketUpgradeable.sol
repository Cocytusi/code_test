// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721BurnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/structs/EnumerableSetUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/Base64Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/StringsUpgradeable.sol";

/**
* @title Cosmic Elves Ticket v1.0.0
* @author @DirtyCajunRice
*/
contract CosmicElvesTicketUpgradeable is Initializable, ERC721Upgradeable, ERC721EnumerableUpgradeable, PausableUpgradeable, AccessControlUpgradeable, ERC721BurnableUpgradeable {
    using CountersUpgradeable for CountersUpgradeable.Counter;
    using EnumerableSetUpgradeable for EnumerableSetUpgradeable.UintSet;
    using StringsUpgradeable for uint256;

    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant UPDATER_ROLE = keccak256("UPDATER_ROLE");

    CountersUpgradeable.Counter private _tokenIdCounter;

    EnumerableSetUpgradeable.UintSet private percent5;
    EnumerableSetUpgradeable.UintSet private percent10;
    EnumerableSetUpgradeable.UintSet private percent15;
    EnumerableSetUpgradeable.UintSet private percent20;

    IERC20Upgradeable public mintPaymentToken;

    address public treasuryAddress;

    uint256 public ticketPrice;
    uint256 public startTime;
    uint256 public totalTickets;

    string public imageBaseURI;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {}

    function initialize() public initializer {
        __ERC721_init("ElvesTicket", "ETICKET");
        __ERC721Enumerable_init();
        __Pausable_init();
        __AccessControl_init();
        __ERC721Burnable_init();

        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(PAUSER_ROLE, msg.sender);
        _grantRole(UPDATER_ROLE, msg.sender);

        mintPaymentToken = IERC20Upgradeable(0x985458E523dB3d53125813eD68c274899e9DfAb4);
        treasuryAddress = address(0x62EFB2cAf1F3ee645Ff23B004b6e88a9A929B563);
        startTime = 1653310800;
        ticketPrice = 10 ether;
        totalTickets = 5000;
        imageBaseURI = "https://images.cosmicuniverse.one/cosmic-elves-tickets/";

        if (_tokenIdCounter.current() == 0) {
            _tokenIdCounter.increment();
        }
    }

    function safeMint(address to) internal {
        uint256 tokenId = _tokenIdCounter.current();
        require(startTime >= block.timestamp, "Mint has not started yet");
        require(tokenId < totalTickets, "Sold out");

        _tokenIdCounter.increment();
        _safeMint(to, tokenId);

        processMinted(tokenId);
    }

    function mint(address to) public {
        require(mintPaymentToken.allowance(_msgSender(), address(this)) >= ticketPrice, "Insufficient 1USDC allowance");
        require(mintPaymentToken.balanceOf(_msgSender()) >= ticketPrice, "Insufficient 1USDC balance");
        mintPaymentToken.transferFrom(_msgSender(), treasuryAddress, ticketPrice);
        safeMint(to);
    }

    function batchMint(address to, uint256 amount) public {
        for (uint256 i = 0; i < amount; i++) {
            mint(to);
        }
    }

    function processMinted(uint256 tokenId) internal {
        bytes32 randBase = vrf();
        uint256 rand = uint256(keccak256(abi.encodePacked(randBase, tokenId, block.number, block.timestamp)));
        uint256 outcome = rand % 1000;
        if (outcome >= 990) {
            if (percent20.length() < 50) {
                percent20.add(tokenId);
                return;
            }
            outcome = 989;
        }
        if (outcome >= 950 && outcome < 990) {
            if (percent15.length() < 200) {
                percent15.add(tokenId);
                return;
            }
            outcome = 949;
        }
        if (outcome >= 750 && outcome < 950) {
            if (percent10.length() < 1000) {
                percent10.add(tokenId);
                return;
            }
        }
        if (percent5.length() < 3750) {
            percent5.add(tokenId);
            return;
        }
        if (percent10.length() < 1000) {
            percent10.add(tokenId);
            return;
        }
        if (percent15.length() < 200) {
            percent15.add(tokenId);
            return;
        }
        percent20.add(tokenId);
    }

    function discountOf(uint256 tokenId) public view returns(uint256 discount) {
        require(super._exists(tokenId), "Discount query for nonexistent token");
        require(_tokenIdCounter.current() == totalTickets, "Minting is still live");
        if (percent5.contains(tokenId)) {
            return 5;
        } else if (percent10.contains(tokenId)) {
            return 10;
        } else if (percent15.contains(tokenId)) {
            return 15;
        } else if (percent20.contains(tokenId)) {
            return 20;
        }
        return 0;
    }

    function batchDiscountOf(uint256[] memory tokenIds) public view returns(uint256[] memory) {
        uint256[] memory discounts = new uint256[](tokenIds.length);
        for (uint256 i = 0; i < tokenIds.length; i++) {
            discounts[i] = discountOf(tokenIds[i]);
        }
        return discounts;
    }

    function tokensOfOwner(address _address) public view returns(uint256[] memory) {
        uint256 total = super.balanceOf(_address);
        uint256[] memory tokens = new uint256[](total);
        for (uint256 i = 0; i < total; i++) {
            tokens[i] = super.tokenOfOwnerByIndex(_address, i);
        }
        return tokens;
    }

    function tokensAndDiscountsOfOwner(address _address) public view
    returns(uint256[] memory tokens, uint256[] memory discounts) {
        uint256 total = super.balanceOf(_address);
        tokens = new uint256[](total);
        discounts = new uint256[](total);
        for (uint256 i = 0; i < total; i++) {
            tokens[i] = super.tokenOfOwnerByIndex(_address, i);
            discounts[i] = discountOf(tokens[i]);
        }
        return (tokens, discounts);
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        uint256 discount = discountOf(tokenId);
        string memory discountStr = _tokenIdCounter.current() == totalTickets
        ? string(abi.encodePacked(discount.toString(), '%'))
        : "pending";
        string memory imageURI = string(abi.encodePacked(imageBaseURI, discount.toString()));
        bytes memory dataURI = abi.encodePacked(
            '{',
            '"name": "Cosmic Elves Discount Ticket #', tokenId.toString(), '",',
            '"image": "', imageURI, '",',
            '"attributes": [',
            '{',
            '"trait_type": "discount",',
            '"value": "',  discountStr, '"',
            '}',
            ']'
            '}'
        );
        return string(
            abi.encodePacked(
                "data:application/json;base64,",
                Base64Upgradeable.encode(dataURI)
            )
        );
    }

    // Admin

    function setStartTime(uint256 time) public onlyRole(UPDATER_ROLE) {
        startTime = time;
    }

    function setTicketPrice(uint256 price) public onlyRole(UPDATER_ROLE) {
        ticketPrice = price;
    }

    function setTotalTickets(uint256 total) public onlyRole(UPDATER_ROLE) {
        totalTickets = total;
    }

    function vrf() internal view returns (bytes32 result) {
        uint[1] memory bn;
        bn[0] = block.number;
        assembly {
            let memPtr := mload(0x40)
            if iszero(staticcall(not(0), 0xff, bn, 0x20, memPtr, 0x20)) {
                invalid()
            }
            result := mload(memPtr)
        }
    }

    /**
    * @notice Pause token upgrades and transfers
    *
    * @dev Allows the owner of the contract to stop the execution of
    *      upgradeAll and transferFrom functions
    */
    function pause() external onlyRole(PAUSER_ROLE) {
        _pause();
    }

    /**
    * @notice Unpause token upgrades and transfers
    *
    * @dev Allows the owner of the contract to resume the execution of
    *      upgradeAll and transferFrom functions
    */
    function unpause() external onlyRole(PAUSER_ROLE) {
        _unpause();
    }

    // Overrides

    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
    internal
    whenNotPaused
    override(ERC721Upgradeable, ERC721EnumerableUpgradeable)
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    // The following functions are overrides required by Solidity.

    function supportsInterface(bytes4 interfaceId)
    public
    view
    override(ERC721Upgradeable, ERC721EnumerableUpgradeable, AccessControlUpgradeable)
    returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}