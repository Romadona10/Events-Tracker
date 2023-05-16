import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() fromFather:any;
  @Input() daddy:any;
  @Input() mummy:any;
  @Input() ifeanyichukwu!: string;

  constructor(){ }

  ngOnInit(): void {
    
  }
 
}
