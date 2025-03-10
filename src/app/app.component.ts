import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from './userService/user-service.service';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, AsyncPipe, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentoring-first-project';
  private readonly dialog = inject (MatDialog)
  public readonly userService = inject(UserService)

  public openDialog(): void {
    const dialogRef = this.dialog.open(AuthComponent, {
      width: "400px",
      height: "200px"
    });

    dialogRef.afterClosed().subscribe((result:string | null) => {
      if (result === "admin") {
        this.userService.loginAsAdmin(result)
        return 
      } else if (result === "user") {
        this.userService.loginAsUser(result)
        return 
      } else {
        console.log(result, 'The null');
        return null
      }
    });
  }

  public logout() {
    if (confirm("Вы точно хотите выйти?")) {
      return this.userService.logout()
    }
    else return false
  }
}
