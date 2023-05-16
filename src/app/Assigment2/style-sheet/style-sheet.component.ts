import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-style-sheet',
  templateUrl: './style-sheet.component.html',
  styleUrls: ['./style-sheet.component.css']
})
export class StyleSheetComponent implements OnInit{

  colors:string
  bgcolor:string
  fontsize1:string
  
  courses:string[]
  trainees:any[]

  constructor(){
    this.courses=["Angular", "React","JS"]
    this.trainees=[
      {
        firstName:"Khushi", lastName:"Rana", marks:90
      },
      {
        firstName:"Sam", lastName:"John", marks:80
      },
      {
        firstName:"Hello", lastName:"World", marks:70

      }
    ]

    this.colors="brown"
    this.bgcolor="#F8F0C6"
    this.fontsize1="30px"
  }
  
  
  
  ngOnInit(): void {
    
  }

}
