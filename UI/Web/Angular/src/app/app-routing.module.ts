import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/loginform/login.component';
import { RegisterComponent } from './components/registerform/register.component';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { SupportEngineerComponent } from './components/supportengineer/supportengineer.component';
import { UserEditComponent } from './components/UserEdit/useredit.component';
//import { AuthGuard } from './auth.guard';
const routes: Routes = [
   // { path: '', component: LoginComponent },
   { path: "register", component: RegisterComponent },
   { path: "login", component: LoginComponent},
   { path: "admin", component: AdminComponent},  //, canActivate: [AuthGuard]
   { path: "user", component: UserComponent},
   { path: "supportengineer", component: SupportEngineerComponent},
   { path: "useredit", component: UserEditComponent}
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