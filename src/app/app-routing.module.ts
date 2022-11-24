import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmdashboardComponent } from './admdashboard/admdashboard.component';
import { AdmindashboardGuard } from './admindashboard.guard';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { AdmpostjobsComponent } from './admpostjobs/admpostjobs.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FirstComponent } from './first/first.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { QuestionsComponent } from './questions/questions.component';
import { RegisterComponent } from './register/register.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { WildcardComponent } from './wildcard/wildcard.component';

const routes: Routes = [
  {path:"",component:FirstComponent},
  {path:"first",component:FirstComponent},
  {path:"adminlogin",component:AdminloginComponent},
  {path:"adminregister",component:AdminregisterComponent},
  {path:"admdashboard", component:AdmdashboardComponent},
  {path:"admpostjobs", component:AdmpostjobsComponent},
  {path:"admin", component:AdmdashboardComponent,
  canActivate : [AdmindashboardGuard] },
  {path:"user-details", component:UserDetailsComponent},
  {path:"loginuser", component:LoginuserComponent},
  {path:"assessment", component:AssessmentComponent},
  {path:"questions",component:QuestionsComponent},
  {path:"header",component:HeaderComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"**",component:WildcardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const myRoutings = [
  FirstComponent,
  AdminloginComponent,
  AdminregisterComponent,
  AdmdashboardComponent,
  AdmpostjobsComponent,
  UserDetailsComponent,
  AssessmentComponent,
  QuestionsComponent,
  LoginComponent,
  HeaderComponent,
  RegisterComponent,
  DashboardComponent,
  LoginuserComponent,
  WildcardComponent
]
