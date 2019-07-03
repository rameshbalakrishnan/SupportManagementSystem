import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/loginform/login.component';
import { RegisterComponent } from './components/registerform/register.component';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { SupportEngineerComponent } from './components/supportengineer/supportengineer.component';
import { UserEditComponent } from './components/UserEdit/useredit.component';
import { AdminDasboardComponent } from './components/admindashboard/admindashboard.component';
import { UserListComponent } from './components/UserList/UserList.component';
import { AdminDasboardoOldComponent } from './components/admindashboard old/admindashboard.component';
import { ChangePasswordComponent } from './components/changepassword/changepassword.component';
import { RequestComponent } from './components/requestform/requestform.component';
import { RequestEditComponent } from './components/requestedit/requestedit.component';
import { ProfileComponent } from './components/Profile/profile.component';
import { ProfileEditComponent } from './components/profileedit/profileedit.component';
//import { AuthGuard } from './auth.guard';
const routes: Routes = [
   // { path: '', component: LoginComponent },
   { path: "register", component: RegisterComponent },
   { path: "login", component: LoginComponent},
   { path: "admin", component: AdminComponent},  //, canActivate: [AuthGuard]
   { path: "user", component: UserComponent},
   { path: "supportengineer", component: SupportEngineerComponent},
   { path: "useredit", component: UserEditComponent},
   { path: "admindashboard" , component: AdminDasboardComponent},
   { path: "userlist", component: UserListComponent},
   { path: "admindashboardold",component:AdminDasboardoOldComponent},
   { path: "changepassword",component:ChangePasswordComponent},
   { path: "request",component:RequestComponent},
   { path: "requestedit",component:RequestEditComponent},
   { path: "profile", component:ProfileComponent},
   { path: "profileedit", component:ProfileEditComponent}
   // { path: '**', redirectTo: '' }//,
];
//RouterModule.forRoot(routes)
@NgModule({
imports: [RouterModule.forRoot(
      routes,
      { enableTracing: true } 
    )
],
exports: [RouterModule]
})
export class AppRoutingModule { }