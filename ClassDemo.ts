class MyStudent
{
   

    constructor(private lname:string,private fname:string)
    {
       
    }
    GetFullName():string
    {
      return  this.fname + " "  + this.lname; 
    }
}

let  s = new MyStudent("patil","veer")

console.log(s.GetFullName())

