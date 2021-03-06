import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AuthService } from './services/auth.service';




@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent
  ],
  imports: [
      BrowserModule,
     
      AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
      AngularFireDatabaseModule,
      AngularFireAuthModule,
      NgbModule.forRoot(),
      AngularFontAwesomeModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
