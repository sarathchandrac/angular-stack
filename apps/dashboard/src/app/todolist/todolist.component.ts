import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'fem-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit{
    
  constructor() {}
  todolist = [{"todotitle":"Welcome todolist", desc:"", showdesc:false}]
  todotitle:string
  desc:string
  ngOnInit(): void {
    
  }
  addnewtodolist(title){
    var temp = {'todotitle':title, desc:"", showdesc:false}
    this.todolist.push(temp);
    this.todotitle = "";
  }
  changestatus(key){
    this.todolist[key].showdesc = true;
  }
  adddescriptionstodo(key){
    this.todolist[key].desc = this.desc
  }
}
