import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.page.html',
  styleUrls: ['./add-user.page.scss'],
})
export class AddUserPage implements OnInit {

  constructor(private userServ: UsersService, private router: Router) { }

  ngOnInit() {
  };
  onSubmit(f) {
    console.log(f);
    this.userServ.addUsers(f);
    this.router.navigateByUrl('/crud-user/list-user');
  }

}
