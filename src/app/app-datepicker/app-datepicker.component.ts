import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-app-datepicker',
  templateUrl: './app-datepicker.component.html',
  styleUrls: ['./app-datepicker.component.css']
})
export class AppDatepickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('ngModel') _model;

  get model(): any {
    console.log("get");
    return this._model;
  }

  @Output() ngModelChange = new EventEmitter();

  set model(v: any) {
    console.log("set");
    this._model = v;
    this.ngModelChange.emit(this._model);
  }

}
