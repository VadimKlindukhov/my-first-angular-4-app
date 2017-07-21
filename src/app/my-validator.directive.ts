import { Directive } from '@angular/core';
import { NG_VALIDATORS, FormControl } from '@angular/forms';
import { appMyValidator } from './editor/steps/step1/step1.component'

@Directive({
  selector: '[appMyValidator][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: appMyValidator,
      multi: true
    }
  ]
})
export class MyValidatorDirective {
}

// function appMyValidator(control: FormControl) {
//   if(control) {
//     console.log(control.value);
//   } else {
//     console.log("NULL NULL NULL");
//   }
//   let value: string = control.value;
//   if(value && value.endsWith("invalid")) {
//     console.log(1);
//     return value;
//   } else {
//     console.log(2);
//     return null;
//   }
// }
