import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { UiService } from '../services/ui.service';
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  title: string ="Events Tracker"
  showAddTask: boolean = false
  subscription!: Subscription;
  

  constructor (private uiService:UiService) {
    this.subscription =this.uiService
    .onToggle()
    .subscribe
    (value =>this.showAddTask=value)
  }

  ngOnInit(): void{
  
  }
 toggleAddTask(){
  this.uiService.toggleAddTask();
 } 
}