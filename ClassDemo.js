"use strict";
var MyStudent = /** @class */ (function () {
    function MyStudent(lname, fname) {
        this.lname = lname;
        this.fname = fname;
    }
    MyStudent.prototype.GetFullName = function () {
        return this.fname + " " + this.lname;
    };
    return MyStudent;
}());
var s = new MyStudent("patil", "veer");
console.log(s.GetFullName());
//# sourceMappingURL=ClassDemo.js.map