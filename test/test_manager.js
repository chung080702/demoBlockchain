const { ethers, upgrades } = require('hardhat');
const { BigNumber } = require('ethers');
const { expect } = require('chai');



describe('Demo Test', function () {
    before(async function () {

        [deployer, user] = await ethers.getSigners();
        const ManagerStudentFactory = await ethers.getContractFactory("ManagerStudent", deployer);
        this.ManagerStudent = await ManagerStudentFactory.deploy();
        this.ManagerStudentUser = await this.ManagerStudent.connect(user);
        await this.ManagerStudent.addStudent(18, "Chung");
        await this.ManagerStudent.addStudent(20, "Khanh");
    });
    it('addStudent', async function () {
        var infoChung = await this.ManagerStudentUser.infoStudent(0);
        var infoKhanh = await this.ManagerStudentUser.infoStudent(1);
        expect(infoChung[0]).to.equal(BigNumber.from(18));
        expect(infoChung[1]).to.equal("Chung");
        expect(infoKhanh[0]).to.equal(BigNumber.from(20));
        expect(infoKhanh[1]).to.equal("Khanh");
    });
    it("fixInfoStudent", async function () {
        await this.ManagerStudent.fixInfoStudent(0, 20, "Chung");
        var infoChung = await this.ManagerStudentUser.infoStudent(0);
        expect(infoChung[0]).to.equal(BigNumber.from(20));
        expect(infoChung[1]).to.equal("Chung");
    })
    it("deleteStudent", async function () {
        await this.ManagerStudent.deleteStudent(0);
        await expect(this.ManagerStudentUser.infoStudent(0)).to.be.revertedWith("not exist student");
    })

});
