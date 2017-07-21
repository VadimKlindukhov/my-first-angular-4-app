import { Component, OnInit } from '@angular/core';
import { PtrService } from 'app/ptr.service';
import { NgbDate  } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { NgForm, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EditorComponent } from 'app/editor/editor/editor.component';

declare var window: any;

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {

  window: any = window;
  constructor( service: PtrService, parent: EditorComponent ) {
    this.parent = parent;
    this.ptr = {
      date: {
        date: {
          "year": 2017,
          "month": 7,
          "day": 21
        },
        time: {
          "hour": 11,
          "minute": 11,
          "second": 0
        }
      },
      name: "title",
      desc: "description",
      classification: "3.54545 Fuel",
      enquiryPeriod: {
        start:  {
          year: 2019,
          month: 10,
          day: 11
        },
        end:  {
          year: 2019,
          month: 10,
          day: 22
        }
      },
      tenderPeriod: {
        start:  {
          year: 2019,
          month: 11,
          day: 11
        },
        end:  {
          year: 2019,
          month: 11,
          day: 22
        }
      }
    };
  }

  value: number;
  ptr: any;
  myForm: NgForm;
  route: any;
  parent: EditorComponent;

  ngOnInit() {
  }

  clickMe(f: NgForm) {
    console.log(this.parent.myVar);
    console.log("from window " + window.myVar);
    this.parent.doOutput();
  }

}

export function appMyValidator(control: FormControl) {
  let value: string = control.value;
  if(value && value.endsWith("invalid")) {
    console.log(1);
    return value;
  } else {
    console.log(2);
    return null;
  }
}
