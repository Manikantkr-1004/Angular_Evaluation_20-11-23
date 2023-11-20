import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data: {title: string, completed:boolean} = {title:"",completed: false};
  todoData: {id:number,title:string,completed:boolean}[] = [];

  constructor(private dataService: DataService){};

  ngOnInit(): void {
      this.todoData = this.dataService.getData();
  }

  onSubmit(e:Event){
    e.preventDefault();
    this.dataService.addTodo(this.data);
    window.location.reload();
  }

  title(e:Event){
    this.data.title = (e.target as HTMLInputElement).value;
  }
  status(e:Event){
    this.data.completed = (e.target as HTMLInputElement).checked;
  }

  delTodo(id:number){
    this.dataService.delTodo(id);
    window.location.reload();
  }
}
