// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

abstract contract MyNFTMarketplace is ERC721, Ownable {
    constructor() ERC721("PetNFT", "PNFT") {}
    uint256 private _tokenIdCounter;

    struct NFT {
        string name;
        uint256 price;
        address owner;
    }

    mapping(uint256 => NFT) public nfts;
    mapping(address => uint256[]) private _ownedTokens;

    event NFTCreated(
        uint256 tokenId,
        string name,
        uint256 price,
        address owner
    );
    event NFTTransferred(uint256 tokenId, address from, address to);
    event NFTPriceUpdated(uint256 tokenId, uint256 oldPrice, uint256 newPrice);

    function mintNFT(string memory name, uint256 price) public onlyOwner {
        _tokenIdCounter++;
        uint256 tokenId = _tokenIdCounter;

        _mint(msg.sender, tokenId);

        nfts[tokenId] = NFT(name, price, msg.sender);
        _ownedTokens[msg.sender].push(tokenId);

        emit NFTCreated(tokenId, name, price, msg.sender);
    }

    function transferNFT(uint256 tokenId, address to) public {
        address from = ownerOf(tokenId);

        require(from == msg.sender, "You are not the owner of this NFT");

        _transfer(from, to, tokenId);

        nfts[tokenId].owner = to;

        _removeTokenFromOwnerEnumeration(from, tokenId);
        _ownedTokens[to].push(tokenId);

        emit NFTTransferred(tokenId, from, to);
    }

    function updatePrice(uint256 tokenId, uint256 newPrice) public {
        require(
            ownerOf(tokenId) == msg.sender,
            "You are not the owner of this NFT"
        );

        uint256 oldPrice = nfts[tokenId].price;
        nfts[tokenId].price = newPrice;

        emit NFTPriceUpdated(tokenId, oldPrice, newPrice);
    }

    function getNFT(
        uint256 tokenId
    ) public view returns (string memory, uint256, address) {
        NFT memory nft = nfts[tokenId];
        return (nft.name, nft.price, nft.owner);
    }

    function getNFTsByOwner(
        address owner
    ) public view returns (uint256[] memory tokenIds) {
        return _ownedTokens[owner];
    }

    // Internal function to remove a token from the owner's list
    function _removeTokenFromOwnerEnumeration(
        address from,
        uint256 tokenId
    ) private {
        uint256[] storage ownedTokens = _ownedTokens[from];
        for (uint256 i = 0; i < ownedTokens.length; i++) {
            if (ownedTokens[i] == tokenId) {
                ownedTokens[i] = ownedTokens[ownedTokens.length - 1];
                ownedTokens.pop();
                break;
            }
        }
    }
}
