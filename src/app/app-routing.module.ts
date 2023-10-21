import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { User } from '@angular/fire/auth';
import { AuthGuard, AuthPipe, AuthPipeGenerator } from '@angular/fire/auth-guard';
import { map } from 'rxjs';

const redirectUnauthorizedAndUnverifiedToAuth: AuthPipe = map((user: User | null) => {
  return (user) ? true : ['auth']
  //return !!user ? (user.emailVerified ? true : ['auth']) : ['auth']
})
const authPipeGenerator: AuthPipeGenerator = () => redirectUnauthorizedAndUnverifiedToAuth



const routes: Routes = [
  {
    path: 'auth',
    loadChildren: ()=>import('./module/auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path: '',
    loadChildren: ()=>import('./module/panel/panel.module').then(m=>m.PanelModule),
    canActivate: [AuthGuard],
    data: { authGuardPipe: authPipeGenerator },
    runGuardsAndResolvers: 'always',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
