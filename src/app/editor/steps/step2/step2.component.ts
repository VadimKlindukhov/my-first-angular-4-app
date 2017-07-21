import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {
  step2group: FormGroup;
  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    console.log(route);
  }

  ngOnInit() {
    this.buildForm();
  }

  myClick(): void {
    alert(JSON.stringify({...this.ptr, ...this.step2group.value}));
  }
  ptr: any = {
    name: 'wsdfdssdf',
    kind: 'sdfdfs'
  };
  buildForm(): void {
    this.step2group = this.fb.group({
      'name': [this.ptr.name, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(24),
      ]
    ]
    });
  }

}
