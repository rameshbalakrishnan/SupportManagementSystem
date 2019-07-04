import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/loginform/login.component';
import { RegisterService } from './shared/service/registerservice';
import { RegisterComponent } from './components/registerform/register.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './shared/service/loginservice';
import { UserComponent } from './components/user/user.component';
import { SupportEngineerComponent } from './components/supportengineer/supportengineer.component';
import { UserEditComponent } from './components/UserEdit/useredit.component';
import { AdminDasboardComponent } from './components/admindashboard/admindashboard.component';
import { UserListComponent } from './components/UserList/UserList.component';
import { RequestService } from './shared/service/requestservice';
import { ChangePasswordComponent } from './components/changepassword/changepassword.component';
import { RequestEditComponent } from './components/requestedit/requestedit.component';
import { RequestComponent } from './components/requestform/requestform.component';
import { ProfileComponent } from './components/Profile/profile.component';
import { ProfileEditComponent } from './components/profileedit/profileedit.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    SupportEngineerComponent,
    UserEditComponent,
    AdminDasboardComponent,
    UserListComponent,
    ChangePasswordComponent,
    RequestEditComponent,
    RequestComponent,
    ProfileComponent,
    ProfileEditComponent
  ],
  entryComponents: [
    LoginComponent,
    RegisterComponent,
    UserComponent,
    SupportEngineerComponent,
    ChangePasswordComponent,
    RequestEditComponent,
    RequestComponent,
    ProfileComponent,
    ProfileEditComponent
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RegisterService, LoginService, RequestService],//,AuthGuard
  bootstrap: [AppComponent]
})
export class AppModule { }
