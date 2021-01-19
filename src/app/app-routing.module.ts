import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './pages/users/users.component';
import { HeaderComponent } from './layout/header/header.component';
import { AddEditComponent } from './pages/add-edit/add-edit.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: "user/add/:id", component: AddEditComponent},
  { path: "user/edit/:id", component: AddEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
