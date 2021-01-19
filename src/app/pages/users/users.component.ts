import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] | any;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.users = this.userService.onGet()
  }

  onDelete(id: Number){
    this.userService.onDelete(id)
  }

}
