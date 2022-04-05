import { Component, OnInit } from '@angular/core';
import { Upcoming, Event } from 'src/app/home/home-model';
import { DatahandlerService } from '../datahandler.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  uData:Upcoming[]
  eData:Event[]
  flag:boolean
  upDesc;
  upTitle;
  upLink;
  upId;
  upImage;
  regEnabled = false;
  constructor(private dataService: DatahandlerService) {
    
      this.dataService.setTitle('E-Cell Events');
     
   }

  ngOnInit() {
    this.dataService.getUpcoming().subscribe((data)=>{
      this.uData = data
      if(this.uData.length > 0) {
        this.flag = true;
      }else{
        this.flag = false;
      }
    });
    

    this.dataService.getEvents().subscribe((data)=>{
      this.eData = data
    });
    this.dataService.getUpcoming().subscribe((data)=>{
      this.uData = data
      this.upId = data[0].id;
      this.upTitle = data[0].title;
      this.upDesc = data[0].description;
      this.upImage = data[0].image;
      if(this.uData[0].link === 'website'){
        this.regEnabled = true;
      }
      else{
        this.upLink = data[0].link
      }
    });

  
  }
  

}
