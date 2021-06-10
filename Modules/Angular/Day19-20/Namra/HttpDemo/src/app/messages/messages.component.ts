import { Component, OnInit } from '@angular/core';
import { HttpDemoService } from '../http-demo.service';
import { MessageService } from '../message.service';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService, private httpDemoService : HttpDemoService ) {}

  ngOnInit() {
    this.httpDemoService.getEmployee().subscribe(data =>{
      console.log(data);
    });
  }

}

