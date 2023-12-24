import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { HomeComponent } from './Dashboard /home/home.component';

export const routes: Routes = [
  { path: '', component: UserFormComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: UserFormComponent },
  { path: 'about', component: UserFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
