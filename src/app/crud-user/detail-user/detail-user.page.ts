import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.page.html',
  styleUrls: ['./detail-user.page.scss'],
})
export class DetailUserPage implements OnInit {
  @Input() id: string;
  users;
  selectedUser;
  constructor(private activatedRoute: ActivatedRoute,
    private userServ: UsersService,
    private router: Router,
    private modalctrl: ModalController,
    public alertController: AlertController) { }

  ngOnInit() {
    /* this.userServ.getUsersById(this.id).subscribe(res => {
      this.users = res;
    }); */
    /* this.activatedRoute.paramMap.subscribe((p: ParamMap) => {
      console.log(p.get('id'));
    this.userServ.getUsersById(p).subscribe(res => {
      this.user = res;
    });
  }); */
    /* this.activatedRoute.paramMap.subscribe((p: ParamMap) => {
      console.log(p.get('id'));
      this.userServ.getUsersById(p).subscribe(res => {
        this.users = res;
      });
    }); */

    this.activatedRoute.paramMap.subscribe(
      (p) => {
        console.log(p);
        this.id = p.get('id');
        this.users = this.userServ.getUsersById(this.id);
      }
    );
  };

  /* async deleteUser(){
    await this.userServ.deleteUser(this.users);
    this.modalctrl.dismiss();
  } */
  async deleteUser() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmation!',
      message: 'êtes vous sur de supprimer cet utilisateur!!',
      buttons: [
        {
          text: 'Non',
          role: 'cancel',
        },
        {
          text: 'Oui',
          handler: () => {
            this.userServ.deleteUser(this.users);
            this.router.navigateByUrl('/crud-user/list-user');
          }
        }
      ]
    });

    await alert.present();
  };
  goToEdit(){
    this.router.navigate(['crud-user', 'edit-user', this.selectedUser.id]);
  }

}
