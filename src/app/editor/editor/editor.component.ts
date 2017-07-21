import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor() {
    this.myVar = 'my inner var';
  }

  ngOnInit() {
  }

  public doOutput() {
    console.log('my output');
  }

  public myVar: string;
}
