import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-switch',
  templateUrl: './dynamic-switch.component.html',
  styleUrls: ['./dynamic-switch.component.css']
})
export class DynamicSwitchComponent implements OnInit {

  //variables
  switch:number

  //constructr
  constructor(){
    this.switch=1
  }

  getSwitch()
  {
    return this.switch
  }
  ngOnInit(): void {
    
  }

}
