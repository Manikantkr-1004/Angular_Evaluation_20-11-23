import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  localData: any = localStorage.getItem('todo');
  todoData:any = JSON.parse(this.localData) || [];

  getData(){
    const loc: any = localStorage.getItem('todo');
    const tod:any = JSON.parse(this.localData) || [];
    this.todoData = tod;
    return tod;
  }

  addTodo(item: {title: string, completed:boolean}){
    const data = {...item,id: this.todoData.length+1};
    this.todoData.push(data);
    localStorage.setItem('todo',JSON.stringify(this.todoData));
    this.getData();
  }

  delTodo(id: number){
    this.todoData = this.todoData.filter((ele:any)=> ele.id!==id);
    localStorage.setItem('todo',JSON.stringify(this.todoData));
  }
}
