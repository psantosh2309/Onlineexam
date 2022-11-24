import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedService } from './shared.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { myRoutings } from './app-routing.module';
import { RestService } from './rest.service';
// import { NotificationModule } from '@progress/kendo-angular-notification';
import { AdmindashboardGuard } from './admindashboard.guard';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    myRoutings
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // NotificationModule,
    // NgbModule
  ],
  providers: [RestService, AdmindashboardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
