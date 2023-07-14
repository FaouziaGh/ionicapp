import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DetailUserPage } from '../detail-user/detail-user.page';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.page.html',
  styleUrls: ['./list-user.page.scss'],
})
export class ListUserPage implements OnInit {
  users = [];
  constructor(private listUserServ: UsersService, private router: Router) { }

  ngOnInit() {
    this.listUserServ.getUsers().subscribe(res => {
      console.log(res);
      this.users = res;
    });
    /* this.tabUtilisateurs= this.listUtilisateurServ.getAllUtilisateur(); */
  };
  goToAdd() {
    this.router.navigateByUrl('/crud-user/add-user');
  }

}
