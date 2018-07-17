import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  users: User[] = [];

  constructor(private usersvc: UserService) {}

  ngOnInit(){
    this.usersvc.list()
      .subscribe(res => {
        console.log(res);
        this.users = res.Data;
      });
  }
}
