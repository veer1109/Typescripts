"use strict";
//Hello World
console.log("Hello from Veer");
//Variable Declaration 
var ac = 10;
console.log(ac);
var b = 10;
var c = "Veerkumar";
console.log("The number declartion in TS", b);
console.log("The string declartion in TS", c);
//Array declaration in TS
//Enum delcalration
var LanguageKnown;
(function (LanguageKnown) {
    LanguageKnown[LanguageKnown["English"] = 0] = "English";
    LanguageKnown[LanguageKnown["Hindi"] = 1] = "Hindi";
    LanguageKnown[LanguageKnown["Marathi"] = 2] = "Marathi";
})(LanguageKnown || (LanguageKnown = {}));
var student = {
    Name: "Veer",
    Age: 30,
    Phone: 89898899,
    Language: LanguageKnown[LanguageKnown.English]
};
var students = [
    { Name: "abc", Age: 34, Phone: 123434, Language: LanguageKnown[LanguageKnown.English] },
    { Name: "abdc", Age: 32, Phone: 123412334, Language: LanguageKnown[LanguageKnown.English] },
    { Name: "abdsdsc", Age: 35, Phone: 1233233434, Language: LanguageKnown[LanguageKnown.English] },
];
students.push(student);
// for (var index = 0; index < students.length; index++) {
//     var element = students[index];
//     console.log("Name:" + element.Name + "Age: " + element.Age + "Phone: "+ element.Phone + "Lang"+ element.Language)
// }
// Functions in TS
function GetStudentList(students) {
    students.forEach(function (element) {
        console.log("Name:" + element.Name + "Age: " + element.Age + "Phone: " + element.Phone + "Lang" + element.Language);
    });
}
console.log("Callling from functions");
GetStudentList(students);
//Rest Parameters
function GetNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    nums.forEach(function (element) {
        console.log("Numbers", element);
    });
}
GetNumbers(1, 2, 4, 6, 6);
//Default Parameters
function GetInfo(info) {
    if (info === void 0) { info = "Happy"; }
    console.log(info);
}
GetInfo("very happy");
//=====================Functions Advanced======================//
//Anonymous functions 
var StudentName = function (lname, fname) {
    return fname + "   " + lname;
};
console.log(StudentName("patil", "Veerkummar"));
var StudentsName = function (lname, fname) { return fname + " " + lname; };
console.log(StudentsName("patil", "Amruta"));
// Working with interfaces 
//# sourceMappingURL=app.js.map