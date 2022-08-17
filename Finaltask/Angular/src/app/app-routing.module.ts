import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDataComponent } from './user-data/user-data.component';
import { ManagerFlowComponent } from './manager-flow/manager-flow.component';
import { HomeComponent } from './home/home.component';
import { ManagerloginComponent } from './managerlogin/managerlogin.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { ManagerComponent } from './manager/manager.component';
import { TaskdetailComponent } from './taskdetail/taskdetail.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'user-data', component:UserDataComponent},
  {path:'manager-flow', component:ManagerFlowComponent},
  {path:'home', component:HomeComponent},
  {path:'managerlogin', component:ManagerloginComponent},
  {path:'analytics', component:AnalyticsComponent},
  {path:'tasklist', component:TasklistComponent},
  {path:'manager', component:ManagerComponent},
  {path:'taskdetail', component:TaskdetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
