// SPDX-License-Identifier: MIT
pragma solidity ^0.7.4;

contract CarbonCredit {
    struct Mine {
        string name;
        uint256 emissions;
        uint256 reductions;
        uint256 credits;
    }

    mapping(uint => Mine) public mines;
    address public admin;
    uint256 public constant THRESHOLD = 5; // 5 m3/t CO2
    uint256 public penalty = 10 ether; // Penalty if no credits are purchased

    constructor() {
        admin = msg.sender;
        mines[1] = Mine("Mine X", 0, 0, 0);
        mines[2] = Mine("Mine Y", 0, 0, 0);
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    function recordEmissions(uint mineId, uint256 amount) public onlyAdmin {
        mines[mineId].emissions += amount;
        if (mines[mineId].emissions > THRESHOLD) {
            uint256 excess = mines[mineId].emissions - THRESHOLD;
            require(mines[mineId].credits >= excess, "Not enough credits, buy from another mine");
            mines[mineId].credits -= excess;
        }
    }

    function recordReductions(uint mineId, uint256 amount) public onlyAdmin {
        mines[mineId].reductions += amount;
        mines[mineId].credits += amount; // 1 credit per 1 m3/t CO2 reduction
    }

    function transferCredits(uint fromMineId, uint toMineId, uint256 amount) public onlyAdmin {
        require(mines[fromMineId].credits >= amount, "Not enough credits to transfer");
        mines[fromMineId].credits -= amount;
        mines[toMineId].credits += amount;
    }

    function penalizeMine(uint mineId) public onlyAdmin payable {
        require(mines[mineId].emissions > THRESHOLD && mines[mineId].credits == 0, "Mine is compliant");
        require(msg.value >= penalty, "Insufficient penalty payment");
        mines[mineId].credits = 0;
        mines[mineId].emissions = 0; // Reset emissions after penalty
    }

    function getMineData(uint mineId) public view returns (string memory, uint256, uint256, uint256) {
        Mine memory mine = mines[mineId];
        return (mine.name, mine.emissions, mine.reductions, mine.credits);
    }
}
