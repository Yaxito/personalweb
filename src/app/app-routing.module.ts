import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'home',
},
{
  path: 'home',
  component: HomeComponent,
},
{
  path: 'aboutme',
  component: AboutmeComponent,
},
{
  path: 'contact',
  component: ContactComponent,
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
