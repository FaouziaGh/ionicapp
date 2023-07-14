import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
users = [];
  constructor(private listUserServ: UsersService) {
    this.listUserServ.getUsers().subscribe(res => {
      console.log(res);
      this.users = res;
    });
  }

}
