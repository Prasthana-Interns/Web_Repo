import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
const routes: Routes = [
  { path: 'signup', component: SignUpComponent },
  { path: 'view-profile', component: ViewProfileComponent },
  {path:'profile',component:ProfileComponent}
                      ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
