import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  stud: Array<Student>;

  constructor(private _studentService: StudentService, private router: Router, private aR: ActivatedRoute ) { }

  ngOnInit() {
    this.aR.params.subscribe((params) => {
      let id = params['id'];

    this._studentService.getStudent(id)
     .subscribe(res =>{this.stud = res;
    });
    });
  }

  deleteStudent(studentId){
  var subscribe = this._studentService.deleteStudent(studentId)
      .subscribe(res => {
        console.log("test");
        this.router.navigateByUrl('/');
      },
    (error) => {
      console.log("errordsfhg");
      console.log( error);
      this.router.navigateByUrl('/');
    }
    );
    this.router.navigateByUrl('/');
    subscribe.unsubscribe();
  }
}
