import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { KnowledgesComponent } from './components/knowledges/knowledges.component';
import { ExperienceComponent } from './components/experience/experience.component';

const routes: Routes = [
{
  path: '',
  component: HomeComponent,
},
{
  path: 'aboutme',
  component: AboutmeComponent,
},
{
  path: 'knowledges',
  component: KnowledgesComponent,
},
{
  path: 'experience',
  component: ExperienceComponent,
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
