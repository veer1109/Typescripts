"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = MyStudent;
//# sourceMappingURL=ClassDemo.js.map