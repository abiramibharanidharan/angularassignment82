import {Injectable} from '@angular/core'
import {Student} from './student'

@Injectable()
export class StudentService{
    studentList:Student[]=[]
    addStudent(studentDetail:Student){  //add method to add student to array
       this.studentList.unshift(studentDetail)
    }
    getStudent():Student[]    //get method used to get student detail
    {
        return this.studentList;
    }
}