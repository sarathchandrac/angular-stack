import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'fem-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit{
    
  constructor() {}
  todolist = [{"todotitle":"Welcome todolist"}]
  todotitle:string
  ngOnInit(): void {
    
  }
  addnewtodolist(title){
    var temp = {'todotitle':title}
    this.todolist.push(temp);
    this.todotitle = "";
  }
 
}
