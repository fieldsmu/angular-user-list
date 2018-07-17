import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { JsonResponse } from '../JsonResponse';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User;
  constructor(private usersvc: UserService) { }

  ngOnInit() {
    this.usersvc.get(2)
      .subscribe(res => {
        console.log(res);
        this.user = res.Data;
      });
  }

}
