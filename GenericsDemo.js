"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LanguageKnown;
(function (LanguageKnown) {
    LanguageKnown[LanguageKnown["Englsish"] = 0] = "Englsish";
    LanguageKnown[LanguageKnown["Hinddi"] = 1] = "Hinddi";
    LanguageKnown[LanguageKnown["Maradthi"] = 2] = "Maradthi";
})(LanguageKnown || (LanguageKnown = {}));
var std = [
    { Name: "abc", Age: 34, Phone: 123434, Language: LanguageKnown[LanguageKnown.Englsish] },
    { Name: "abdc", Age: 32, Phone: 123412334, Language: LanguageKnown[LanguageKnown.Hinddi] },
    { Name: "abdsdsc", Age: 35, Phone: 1233233434, Language: LanguageKnown[LanguageKnown.Maradthi] },
];
function GetStudentListGenerics(students) {
    students.forEach(function (element) {
        console.log("Name:" + element.Name + "Age: " + element.Age + "Phone: " + element.Phone + "Lang" + element.Language);
    });
}
console.log("Callling from geenrics");
GetStudentListGenerics(std);
//# sourceMappingURL=GenericsDemo.js.map