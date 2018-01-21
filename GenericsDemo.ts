import {IStudentInfo} from './IStudentInfo'
import MyStudent from './ClassDemo'
enum LanguageKnown{Englsish, Hinddi, Maradthi } 
let std:Array<IStudentInfo> = [
    {Name:"abc",Age:34,Phone: 123434,Language:LanguageKnown[LanguageKnown.Englsish]},
    {Name:"abdc",Age:32,Phone: 123412334,Language:LanguageKnown[LanguageKnown.Hinddi]},
    {Name:"abdsdsc",Age:35,Phone: 1233233434,Language:LanguageKnown[LanguageKnown.Maradthi]},
]


function GetStudentListGenerics(students:Array<IStudentInfo>)
{
    students.forEach(element => {
        console.log("Name:" + element.Name + "Age: " + element.Age + "Phone: "+ element.Phone + "Lang"+ element.Language) 
    })
}
console.log("Callling from geenrics")
GetStudentListGenerics(std);

let  s = new MyStudent("patil","veer")

console.log(s.GetFullName())