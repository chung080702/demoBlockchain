pragma solidity ^0.8.7;

contract ManagerStudent {
    struct student {
        uint256 age;
        string name;
        bool isDelete;
    }
    address private owner;
    student[] private students;

    constructor() {
        owner = msg.sender;
    }

    modifier OnlyOwner() {
        require(owner == msg.sender, "can't");
        _;
    }
    modifier studentExist(uint256 _id) {
        require(
            _id < students.length && students[_id].isDelete == false,
            "not exist student"
        );
        _;
    }

    function addStudent(uint256 _age, string memory _name)
        public
        OnlyOwner
        returns (uint256)
    {
        students.push(student(_age, _name, false));
        return students.length;
    }

    function deleteStudent(uint256 _id) public OnlyOwner studentExist(_id) {
        students[_id].isDelete = true;
    }

    function fixInfoStudent(
        uint256 _id,
        uint256 _age,
        string memory _name
    ) public OnlyOwner {
        students[_id].age = _age;
        students[_id].name = _name;
    }

    function infoStudent(uint256 _id)
        public
        view
        studentExist(_id)
        returns (uint256 age, string memory name)
    {
        return (students[_id].age, students[_id].name);
    }
}
