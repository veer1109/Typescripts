export default class MyStudent
{
    constructor(private lname:string,private fname:string)
    {
       
    }
    GetFullName():string
    {
      return  this.fname + " "  + this.lname; 
    }
}



