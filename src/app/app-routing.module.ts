import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { KnowledgesComponent } from './components/knowledges/knowledges.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { TrisergiComponent } from './components/trisergi/trisergi.component';

const routes: Routes = [
  {
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
    path: 'knowledges',
    component: KnowledgesComponent,
  },
  {
    path: 'experience',
    component: ExperienceComponent,
  },
  {
    path: 'trisergi',
    component: TrisergiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
