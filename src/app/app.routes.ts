import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContacPageComponent } from './pages/contac-page/contac-page.component';

export const routes: Routes = [
  {path: "", component: HomePageComponent },
  {path: "about", component: AboutPageComponent },
  {path: "contact", component: ContacPageComponent },
  {path: "**", redirectTo:"" },
];
