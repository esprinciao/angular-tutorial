import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { TestObservableComponent } from './test-observable/test-observable.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user.service';
import { CreateUserComponent } from './create-user/create-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { TokenComponent } from './token/token.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { TestComponent } from './test/test.component';
import { LinksComponent } from './links/links.component';
import { ChatComponent } from './chat/chat.component';
import { DialogComponent } from './dialog/dialog.component';
import { ReportingComponent } from './reporting/reporting.component';
import { EmergencyReportingComponent } from './emergency-reporting/emergency-reporting.component';
import { LiveLocationComponent } from './live-location/live-location.component';
import { MapComponent } from './map/map.component';
import { WellbeingAnalyzerComponent } from './wellbeing-analyzer/wellbeing-analyzer.component';
import { DefaultPieComponent } from './default-pie/default-pie.component';
import {
  AccumulationChartAllModule,
  ChartModule,
} from '@syncfusion/ej2-angular-charts';
import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotpassComponent,
    ReactiveComponent,
    FormbuilderComponent,
    TestObservableComponent,
    UserListComponent,
    CreateUserComponent,
    DeleteUserComponent,
    UpdateUserComponent,
    TokenComponent,
    LifecycleComponent,
    TestComponent,
    LinksComponent,
    ChatComponent,
    DialogComponent,
    ReportingComponent,
    EmergencyReportingComponent,
    LiveLocationComponent,
    MapComponent,
    WellbeingAnalyzerComponent,
    DefaultPieComponent,
    DonutChartComponent,
    BarChartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AccumulationChartAllModule,
    AccumulationChartModule,
    ChartModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
