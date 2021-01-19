import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
id: any | number;
header: any;
user: any| User = {
  id: '',
  firstName: '',
  lastName: '',
  emailId: '',
  phoneNo: '',
  role: '',
  gender: '',
}

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.header = this.id === 0 ? 'Add User' : 'Edit User';

    if(this.id != 0){
      this.user = this.userService.onGetUser(this.id)
    }
  }

  onSubmit(form: NgForm){
    let user: any| User = {
      id: form.value.id,
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      emailId: form.value.emailId,
      phoneNo: form.value.phoneNo,
      role: form.value.role,
      gender: form.value.gender,
    }

    if(this.id === '0'){
      this.userService.onAdd(user);
    }else{
      this.userService.updateUser(user)
    }
    this.router.navigateByUrl('')
  }

}