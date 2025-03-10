import { Component, inject } from '@angular/core';
import { UserService } from '../userService/user-service.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  userService = inject(UserService)
  loginAsAdmin = this.userService.loginAsAdmin
  loginAsUser = this.userService.loginAsUser

  isAdmin(adminStatus: boolean){
    if (adminStatus === true) {
      console.log(333, "Admin")
    } else {
      console.log(333, "User")
    }
  }

  onLoginAsAdmin(){
    // this.loginAsAdmin();
    console.log(111, "onLoginasAdmin");
    this.isAdmin(true)
  }

  onLoginAsUser(){
    // this.loginAsUser();
    console.log(222, "onLoginAsUser")
    this.isAdmin(false)
  }


}
