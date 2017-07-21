import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MyComponent } from './app/my/my.component';
import { PtrService } from './ptr.service';
import { LogServiceService } from './app/services/log-service.service';

import { routes } from './app-routes';
import { EditorComponent } from './editor/editor/editor.component';
import { Step1Component } from './editor/steps/step1/step1.component';
import { AppDatepickerComponent } from './app-datepicker/app-datepicker.component';
import { Step2Component } from './editor/steps/step2/step2.component';
import { HightLightDirective } from './directives/hight-light.directive';
import { LogableDirective } from './directives/logable.directive';
import { MyValidatorDirective } from './my-validator.directive';
import { DateTimePickerComponent } from './my/date-time-picker/date-time-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    EditorComponent,
    Step1Component,
    AppDatepickerComponent,
    Step2Component,
    HightLightDirective,
    LogableDirective,
    MyValidatorDirective,
    DateTimePickerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    NgbModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [PtrService, LogServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
