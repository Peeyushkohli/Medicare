import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
medicine:string[]=[];
  constructor() { }

  ngOnInit(): void {

    this.medicine=this.getAll();




  }
    getAll():string[]{

      return [
        'assets/anelgesic.jpg',
        'assets/renu.png',
        'assets/bpmachine.jpg',
        'assets/detoll.jpg',
        'assets/therma.jpg',
        'assets/crocin.jpg',
        'assets/saridon.jpg',
        
        
        


      ]
    }
}
