import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { UserManageComponent } from './pages/user/user-manage/user-manage.component';
import { UserDisplayComponent } from './pages/user/user-display/user-display.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ForgotPasswordComponent } from './pages/password/forgot-password/forgot-password.component';
import { ResetPasswordInvalidComponent } from './pages/password/reset-password-invalid/reset-password-invalid.component';
import { ResetPasswordSuccessComponent } from './pages/password/reset-password-success/reset-password-success.component';
import { ResetPasswordComponent } from './pages/password/reset-password/reset-password.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    UserManageComponent,
    UserDisplayComponent,
    UserListComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordInvalidComponent,
    ResetPasswordSuccessComponent,
    ResetPasswordComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
