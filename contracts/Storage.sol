//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Storage {

    uint256 public number;

    function getNumber() public view returns (uint256) {
        return number;
    }

    function storeNumber(uint256 _number) public {
        number = _number;
    }
}
