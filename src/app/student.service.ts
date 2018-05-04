import { Injectable } from '@angular/core';
import { Http , Headers , RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Student} from './student';

@Injectable()
export class StudentService {

  result:any;

  constructor(private _http: Http) { }

  getStudents(){
    return this._http.get("/api/all")
      .map(result => this.result = result.json());
  }

  getStudent(id)
  {
    return this._http.get("/api/students/"+id)
      .map(result =>this.result = result.json());
  }
  
  insertStudent(post: Student){
    let headers = new Headers({'content-type':'application/json'});
    let options = new RequestOptions({headers:headers});
    return this._http.post('/api/create',JSON.stringify(post),options)
      .map(result =>this.result = result.json());
  }

  updateStudent(post: Student, id){
    let headers = new Headers({'content-type':'application/json'});
    let options = new RequestOptions({headers: headers});

    return this._http.post('/api/update/'+id,JSON.stringify(post),options)
      .map(result =>this.result = result.json());
  }

  deleteStudent(id)
  {
    return this._http.get("/api/delete/"+id)
      .map(result =>this.result = result.json());
  }

}
