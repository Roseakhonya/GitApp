import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from '../../src/app/services/profile.service';
import { FormsModule } from '@angular/forms'
import { from } from 'rxjs/';
import { ShadowDirective } from './custom-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ShadowDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
