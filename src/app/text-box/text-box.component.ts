import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onKeyPress(event:any){
    console.log((event.target.value.length))
  }

}
