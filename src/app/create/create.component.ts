import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { Router, ActivatedRoute } from '@angular/router';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  student: Student;
  studentFrm: FormGroup;
  students: Array<Student>;
  
  constructor(private _studentService: StudentService, private router: Router, private aR: ActivatedRoute , private fb:FormBuilder) { }

  ngOnInit() {
    this._studentService.getStudents()
      .subscribe(res => this.students = res);

    this.aR.params.subscribe((params) =>{
      if(params['id']){

        this._studentService.getStudent(params['id'])
          .subscribe(res =>{
            this.student = res;
            this.studentFrm = this.fb.group({
              'id': [params['id'],Validators.compose([Validators.required])],
              'name':[this.student[0].name,Validators.compose([Validators.required, Validators.minLength(3) ])],
              'deartment':[this.student[0].deartment,Validators.compose([Validators.required,Validators.minLength(1)])]
            });
          })
      }
      else
      {

        this.studentFrm = this.fb.group({
          'id': [null,Validators.compose([Validators.required])],
          'name':[null,Validators.compose([Validators.required, Validators.minLength(3) ])],
          'deartment':[null,Validators.compose([Validators.required,Validators.minLength(1)])]
        });
      }
    })

    
  }

  addStudent(studentId,student: Student){
    if(studentId!== undefined){
      console.log("updated");
      var subscribe = this._studentService.updateStudent(student,studentId[0].stdno)
        .subscribe(res => {
          this.router.navigateByUrl('/');
        });
        this.router.navigateByUrl('/');
        subscribe.unsubscribe();
    }
    else{
      var subscribe = this._studentService.insertStudent(student)
        .subscribe(newStudent =>{
          this.students.push(student);
          this.router.navigateByUrl('/');
        })
        this.router.navigateByUrl('/');
        subscribe.unsubscribe();
    }
    
  }

}
