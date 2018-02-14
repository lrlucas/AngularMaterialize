import { Component,OnInit  } from '@angular/core';

// Se declaran las variables que jquery va usar
declare var jquery:any;
declare var $ :any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{



  constructor(){

  }

  ngOnInit(){
    $(".button-collapse").sideNav();
  }


  menuToggle(){

    $(".button-collapse").sideNav();

  }
}
