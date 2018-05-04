import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {Student} from '../student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  students:Array<Student>;
  

  constructor(private _studentService:StudentService) { }

  ngOnInit() {
    this._studentService.getStudents()
      .subscribe(res => this.students = res);
  }

}
