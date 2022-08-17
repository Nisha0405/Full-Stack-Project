import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerFlowComponent } from './manager-flow/manager-flow.component';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDataComponent } from './user-data/user-data.component';
import { HomeComponent } from './home/home.component';
import { ManagerloginComponent } from './managerlogin/managerlogin.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { NgChartsModule } from 'ng2-charts';
import { PipePipe } from './pipe.pipe';
import { ManagerComponent } from './manager/manager.component';
import { CommonModule } from '@angular/common';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TaskdetailComponent } from './taskdetail/taskdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagerFlowComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    UserDataComponent,
    HomeComponent,
    ManagerloginComponent,
    AnalyticsComponent,
    PipePipe,
    ManagerComponent,
    TasklistComponent,
    TaskdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
