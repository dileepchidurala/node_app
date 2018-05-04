import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { CreateComponent } from './create/create.component';


const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'students/:id',
    component:StudentComponent
  },
  {
    path: 'create',
    component:CreateComponent
  },
  {
    path: 'edit/:id',
    component:CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
