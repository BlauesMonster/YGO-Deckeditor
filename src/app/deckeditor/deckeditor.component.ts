import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deckeditor',
  templateUrl: './deckeditor.component.html',
  styleUrls: ['./deckeditor.component.css']
})
export class DeckeditorComponent implements OnInit {

  constructor() { }

  public maindeck : Array<any> = new Array(60)
  public extradeck : Array<any> = new Array(15)
  public sidedeck : Array<any> = new Array(15)

  ngOnInit(): void {
  }

}
