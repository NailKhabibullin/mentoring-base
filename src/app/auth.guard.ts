import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './userService/user-service.service';



export const AuthGuard: CanActivateFn = (route, state) => {

  const userService = inject(UserService)
  const router = inject(Router)

  if (userService.isAdmin === true) {
    return true;
  } else {
    router.navigate(['/'])
    return false 
  }
};
