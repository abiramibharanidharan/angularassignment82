import { Component,OnInit } from '@angular/core';
import {StudentService} from './student.service'
import {Student} from './student'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent
{
  studentArray:Student[]=[]  //create array variable for student
   id:number;
   name:string;
   studentDetail:Student;   //instance element for student class
   constructor(public _studentService:StudentService){}
   ngOnInit(){  }
   addStudent(idnum,first)      //add method to insert the value to the table
  {
     this.studentDetail={
       id:idnum,
       name:first
     };
      this._studentService.addStudent(this.studentDetail);
      this.studentArray=this._studentService.getStudent();
  }
}
