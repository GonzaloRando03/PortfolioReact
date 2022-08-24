import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { Project1Component } from './components/project/project1/project1.component';
import { Project2Component } from './components/project/project2/project2.component';
import { Project3Component } from './components/project/project3/project3.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'index', component: IndexComponent },
  { path: 'angularMongo', component: Project1Component },
  { path: 'angularDjango', component: Project2Component },
  { path: 'pythonTkinter', component: Project3Component },
  { path: '**', redirectTo:'', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
