// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import {Base64Upgradeable} from "@openzeppelin/contracts-upgradeable/utils/Base64Upgradeable.sol";
import {StringsUpgradeable} from "@openzeppelin/contracts-upgradeable/utils/StringsUpgradeable.sol";
import {IERC4906Upgradeable} from "@openzeppelin/contracts-upgradeable/interfaces/IERC4906Upgradeable.sol";
import { ERC721Upgradeable } from "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import { Initializable } from "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
/**
 * @dev ERC721 token with storage based token URI management.
 */
abstract contract ERC721URIStorageExtendedUpgradeable is Initializable, ERC721Upgradeable, IERC4906Upgradeable {
    using StringsUpgradeable for uint256;

    mapping(uint256 => bytes) private _tokenURIs;

    string public imageBaseURI;
    function __ERC721URIStorageExtended_init() internal onlyInitializing {

    }

    function __ERC721URIStorageExtended_init_unchained() internal onlyInitializing {
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721URIStorageExtended: URI query for nonexistent token");
        return string(
            abi.encodePacked(
                "data:application/json;base64,",
                Base64Upgradeable.encode(_tokenURIs[tokenId])
            )
        );
    }

    function _setImageBaseURI(string memory _imageBaseURI) internal virtual {
        imageBaseURI = _imageBaseURI;
    }

    function _setTokenURI(uint256 tokenId, bytes memory _tokenURI) internal virtual {
        require(_exists(tokenId), "ERC721URIStorage: URI set of nonexistent token");
        _tokenURIs[tokenId] = _tokenURI;
    }

    function _presetTokenURI(uint256 tokenId, bytes memory _tokenURI) internal virtual {
        _tokenURIs[tokenId] = _tokenURI;
    }

    function _burn(uint256 tokenId) internal virtual override {
        super._burn(tokenId);

        if (_tokenURIs[tokenId].length != 0) {
            delete _tokenURIs[tokenId];
        }
    }

    uint256[48] private __gap;
}
