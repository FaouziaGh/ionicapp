import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss'],
})
export class EditUserPage implements OnInit {
  updatededUser: User;
  constructor(private activatedRoute: ActivatedRoute,
    private userServ: UsersService,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((p: ParamMap) => {
      /* console.log(p.get('id')); */
      this.updatededUser = this.userServ.getUtilisateurById(p.get('id'));
  });
};
editeUser(){
  this.userServ.updateUser(this.updatededUser);
  console.log(this.updatededUser);
  this.router.navigate(['crud-user', 'list-user']);
}

}
