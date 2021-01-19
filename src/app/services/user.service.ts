import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    {
      id: 1,
      firstName: 'A',
      lastName: 'AA',
      emailId: 'a@gmail.com',
      phoneNo: 1234567890,
      role: 'Developer',
      gender: 'Male',
    },
    {
      id: 2,
      firstName: 'B',
      lastName: 'BB',
      emailId: 'b@gmail.com',
      phoneNo: 9887654343,
      role: 'Test',
      gender: 'Female',
    }
  ];

  constructor() { }

  onGet(){
    return this.users
  }

  onGetUser(id: Number){
    return this.users.find(x => x.id == id)
  }

  onAdd(user: User){
    this.users.push(user)
  }

  onDelete(id: Number){
    let user:any = this.users.find(x => x.id === id);
    let index = this.users.indexOf(user,0)
    this.users.splice(index, 1)
  }

  updateUser(user: User){
    let oldUser:any = this.users.find(x => x.id === user.id) ;
    oldUser.firstName = user.firstName;
    oldUser.lastName = user.lastName;
    oldUser.emailId = user.emailId;
    oldUser.phoneNo = user.phoneNo;
    oldUser.role = user.role;
    oldUser.gender = user.gender;
  } 
}
