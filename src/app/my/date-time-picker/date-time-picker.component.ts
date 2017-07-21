import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateTimePickerComponent),
    multi: true
};

@Component({
  selector: 'app-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class DateTimePickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    @Input('ngModel') dateModel: any = {
    date: {
      "year": null,
      "month": null,
      "day": null
    },
    time: {
      "hour": null,
      "minute": null,
      "second": 0
    }
  };

  get date(): any {
    //console.log("get date");
    return this.dateModel.date;
  }

  get time(): any {
    //console.log("get time");
    return this.dateModel.time;
  }

  set time(value: any) {
    console.log("set time");
    this.dateModel.time = value;
    this.onChangeCallback(this.dateModel);
  }

  set date(value: any) {
    console.log("set time");
    this.dateModel.date = value;
    this.onChangeCallback(this.dateModel);
  }

  registerOnChange(fn: any) {
    console.log("registerOnChange");
    this.onChangeCallback = fn;
  }


  onChangeCallback: (_: any) => void = () => {
    console.log("onChange");
  };
  registerOnTouched(fn: any) {
    console.log("registerOnTouched");
    this.onTouchedCallback = fn;
  }

  onTouchedCallback = () => {
    console.log("onTouched");
  };

  setValue(value: any) {
    console.log("setValue");
  }

  writeValue(value: any) {
    console.log(value);
  }

}
