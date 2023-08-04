import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'horario',
    loadChildren: () => import('./horario/horario.module').then( m => m.HorarioPageModule)
  },
  {
    path: 'trilhas',
    loadChildren: () => import('./trilhas/trilhas.module').then( m => m.TrilhasPageModule)
  },
  {
    path: 'imersao-agil',
    loadChildren: () => import('./imersao-agil/imersao-agil.module').then( m => m.ImersaoAgilPageModule)
  },
  {
    path: 'create-task',
    loadChildren: () => import('./create-task/create-task.module').then( m => m.CreateTaskPageModule)
  },
  {
    path: 'classroom1',
    loadChildren: () => import('./classes/classroom1/classroom1.module').then( m => m.Classroom1PageModule)
  },
  {
    path: 'classroom2',
    loadChildren: () => import('./classes/classroom2/classroom2.module').then( m => m.Classroom2PageModule)
  },
  {
    path: 'classroom3',
    loadChildren: () => import('./classes/classroom3/classroom3.module').then( m => m.Classroom3PageModule)
  },
  {
    path: 'classroom4',
    loadChildren: () => import('./classes/classroom4/classroom4.module').then( m => m.Classroom4PageModule)
  },
  {
    path: 'tests-front-back',
    loadChildren: () => import('./tests-front-back/tests-front-back.module').then( m => m.TestsFrontBackPageModule)
  },
  {
    path: 'tests-front-end',
    loadChildren: () => import('./tests-front-end/tests-front-end.module').then( m => m.TestsFrontEndPageModule)
  },
  {
    path: 'tests-back-end',
    loadChildren: () => import('./tests-back-end/tests-back-end.module').then( m => m.TestsBackEndPageModule)
  },  {
    path: 'quadro-de-horario',
    loadChildren: () => import('./quadro-de-horario/quadro-de-horario.module').then( m => m.QuadroDeHorarioPageModule)
  },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
