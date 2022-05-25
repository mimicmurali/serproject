import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dService:DataService){

  }
  title = 'serproject';
  webdata:any;


  fetchData(){
    this.dService.getDataFromWebApi().subscribe(rcvdData=>{this.webdata=rcvdData;})
  }
}
