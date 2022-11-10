// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../interfaces/IBridgeableERC721.sol";
import "../../common/SharedStructs.sol";

interface ICosmicTools is IBridgeableERC721, SharedStructs {
    struct Tool {
        uint256 skillId;
        uint256 durability;
        Rarity rarity;
    }

    function mint(address to, bytes calldata data) external;
}