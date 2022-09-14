const { ethers, upgrades } = require('hardhat');
const { BigNumber } = require('ethers');
const { expect } = require('chai');



describe('Test 2', function () {

    it('addStudent', async function () {
        [deployer] = await ethers.getSigners();
        const ManagerStudentFactory = await ethers.getContractFactory("ManagerStudent", deployer);
        this.ManagerStudent = await ManagerStudentFactory.deploy();

        await this.ManagerStudent.addStudent(18, "Chung", { gasLimit: 1000000 });
        var infoChung = await this.ManagerStudent.getData(0);
        console.log(infoChung);
        //var infoKhanh = await this.ManagerStudent.infoStudent(1);
        // expect(infoChung[0]).to.equal(BigNumber.from(18));
        // expect(infoChung[1]).to.equal("Chung");
        // expect(infoKhanh[0]).to.equal(BigNumber.from(20));
        // expect(infoKhanh[1]).to.equal("Khanh");
    });

});
