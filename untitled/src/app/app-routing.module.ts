import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./components/auth/auth.component";
import {SignUpFormComponent} from "./components/sign-up-form/sign-up-form.component";
import {MapComponent} from "./components/map/map.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {StartPageComponent} from "./components/start-page/start-page.component";
import {AuthGuard} from "./providers/auth.guard";
import {AdminStartPageComponent} from "./components/admin-start-page/admin-start-page.component";


const routes: Routes = [
  {path: 'auth', component: AuthComponent},
    // {path: '**', redirectTo: 'auth', pathMatch: 'full'},
  {path: 'sign-up', component: SignUpFormComponent},
  {path: 'map', component: MapComponent, canActivate: [AuthGuard]},
  {path: 'user-details', component: UserDetailsComponent, canActivate: [AuthGuard]},
  {path: 'welcome', component: StartPageComponent, canActivate: [AuthGuard]},
  {path: 'admin-welcome', component: AdminStartPageComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
