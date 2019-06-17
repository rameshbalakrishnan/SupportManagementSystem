import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/loginform/login.component';
import { RegisterService } from './shared/service/registerservice';
import { RegisterComponent } from './components/registerform/register.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';  
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './shared/service/loginservice';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { SupportEngineerComponent } from './components/supportengineer/supportengineer.component';
import { UserEditComponent } from './components/UserEdit/useredit.component';
//import { AuthService } from './auth.service';
//import { AuthGuard } from './auth.guard';

// const myRoots: Routes = [
//   { path: "register", component: RegisterComponent, canActivate: [AuthGuard] },
//   { path: "login", component: LoginComponent, canActivate: [AuthGuard]},
//   { path: "admin", component: AdminComponent, canActivate: [AuthGuard]},
//   { path: "user", component: UserComponent, canActivate: [AuthGuard]},
//   { path: "supportengineer", component: SupportEngineerComponent, canActivate: [AuthGuard]}
// ];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    UserComponent,
    SupportEngineerComponent,
    UserEditComponent
  ],
  entryComponents: [
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    UserComponent,
    SupportEngineerComponent
],
  imports: [
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    // ,
    // RouterModule.forRoot(
    //   myRoots,
    //   { enableTracing: true } // <-- debugging purposes only
    // )
  ],
  providers: [RegisterService,LoginService],//,AuthGuard
  bootstrap: [AppComponent]
})
export class AppModule { }
