//Hello World
console.log("Hello from Veer")

//Variable Declaration 
let ac:number=10
console.log(ac)
let b: number =10
let c:String="Veerkumar" 
console.log("The number declartion in TS" ,b)
console.log("The string declartion in TS" ,c)


// Interface declaration 

interface StudentInfo
{
    Name:string,
    Age: Number,
    Phone: Number,
    Language: string

}
//Array declaration in TS
//Enum delcalration
enum LanguageKnown{English, Hindi, Marathi } 
let student: StudentInfo= {
Name:"Veer",
Age:30,
Phone:89898899,
Language:LanguageKnown[LanguageKnown.English]
}

let students:StudentInfo[]= [
    {Name:"abc",Age:34,Phone: 123434,Language:LanguageKnown[LanguageKnown.English]},
    {Name:"abdc",Age:32,Phone: 123412334,Language:LanguageKnown[LanguageKnown.English]},
    {Name:"abdsdsc",Age:35,Phone: 1233233434,Language:LanguageKnown[LanguageKnown.English]},
]
students.push(student);

// for (var index = 0; index < students.length; index++) {
//     var element = students[index];
//     console.log("Name:" + element.Name + "Age: " + element.Age + "Phone: "+ element.Phone + "Lang"+ element.Language)
    
// }


// Functions in TS
function GetStudentList(students:StudentInfo[])
{
    students.forEach(element => {
        console.log("Name:" + element.Name + "Age: " + element.Age + "Phone: "+ element.Phone + "Lang"+ element.Language) 
    })
}
console.log("Callling from functions")
GetStudentList(students);

//Rest Parameters

function GetNumbers(...nums: number[])
{
    nums.forEach(element => {
        console.log("Numbers", element)
        
    });
}

GetNumbers(1,2,4,6,6);

//Default Parameters

function GetInfo(info:String="Happy")
{
    console.log(info);
  
}
GetInfo("very happy");


//=====================Functions Advanced======================//

//Anonymous functions 

let StudentName = function(lname:string, fname:string)
{
   return fname + "   " + lname;
}

 console.log( StudentName("patil", "Veerkummar"))


 let StudentsName = (lname:string, fname:string) => {return fname + " "+ lname}

 console.log(StudentsName("patil", "Amruta"))


 // Working with interfaces 

