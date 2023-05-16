import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclassexample',
  templateUrl: './ngclassexample.component.html',
  styleUrls: ['./ngclassexample.component.css']
})
export class NgclassexampleComponent implements OnInit {
  
  tdata:boolean
  obj:any[]

  constructor(){
    this.tdata=true
    this.obj=[{
      country: "India",
      currency: "ruppee",
      states: 28
    }]
  }

  public getObj()
  {
    return this.obj
  }
  ngOnInit(): void {
   
  }

}
