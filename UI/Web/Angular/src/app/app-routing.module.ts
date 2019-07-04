import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/loginform/login.component';
import { RegisterComponent } from './components/registerform/register.component';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { SupportEngineerComponent } from './components/supportengineer/supportengineer.component';
import { UserEditComponent } from './components/UserEdit/useredit.component';
import { AdminDasboardComponent } from './components/admindashboard/admindashboard.component';
import { UserListComponent } from './components/UserList/UserList.component';
import { ChangePasswordComponent } from './components/changepassword/changepassword.component';
import { RequestComponent } from './components/requestform/requestform.component';
import { RequestEditComponent } from './components/requestedit/requestedit.component';
import { ProfileComponent } from './components/Profile/profile.component';
import { ProfileEditComponent } from './components/profileedit/profileedit.component';
const routes: Routes = [
   { path: "register", component: RegisterComponent },
   { path: "login", component: LoginComponent },
   { path: "user", component: UserComponent },
   { path: "supportengineer", component: SupportEngineerComponent },
   { path: "useredit", component: UserEditComponent },
   { path: "admindashboard", component: AdminDasboardComponent },
   { path: "userlist", component: UserListComponent },
   { path: "changepassword", component: ChangePasswordComponent },
   { path: "request", component: RequestComponent },
   { path: "requestedit", component: RequestEditComponent },
   { path: "profile", component: ProfileComponent },
   { path: "profileedit", component: ProfileEditComponent }
];
@NgModule({
   imports: [RouterModule.forRoot(
      routes,
      { enableTracing: true }
   )
   ],
   exports: [RouterModule]
})
export class AppRoutingModule { }