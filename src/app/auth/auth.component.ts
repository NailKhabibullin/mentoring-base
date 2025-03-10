import { Component, inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { UserService } from '../userService/user-service.service';

@Component({
  selector: 'app-auth-component',
  standalone: true,
  imports: [ 
    MatDialogModule, 
    MatButtonModule, 
    MatIconModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
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

  onLoginAsAdmin(result: string){
    // this.loginAsAdmin();
    console.log(111, result, "onLoginasAdmin");
    this.isAdmin(true)
  }

  onLoginAsUser(result: string){
    // this.loginAsUser();
    console.log(222, result, "onLoginAsUser")
    this.isAdmin(false)
  }
}
