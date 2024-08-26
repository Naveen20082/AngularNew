import { Routes } from '@angular/router';
import { LoginComponent } from './LogInPage/login/login.component';
import { SignUpComponent } from './LogInPage/sign-up/sign-up.component';
import { LearningComponent } from './Components/learning/learning.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  // {
  //   path: 'learning',
  //   loadChildren: () =>
  //     import('./Components/learning/learning.component').then( //we need a module for this
  //       (m) => m.LearningComponent
  //     ),
  // },
  {
    path: 'learning',
    component: LearningComponent,
  },
  { path: ' ', redirectTo: '/learning', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
