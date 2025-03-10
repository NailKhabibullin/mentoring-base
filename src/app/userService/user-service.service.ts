import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

export interface IUser {
  name: string,
  email: string,
  isAdmin: boolean
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly userSubject$ = new BehaviorSubject<IUser | null>(null)
  public readonly user$ = this.userSubject$.asObservable()

  private user: IUser = {
    name: "Ilnur",
    email: "ilnur@email.ru",
    isAdmin: true
  }

  constructor(private router: Router) { 
    this.user$.subscribe(user => {
      if (user?.isAdmin) {
        this.router.navigate(['/admin']);
      }
    });
  }

  loginAsAdmin(result: string) {
    this.userSubject$.next({...this.user, isAdmin: true})
  }

  loginAsUser(result: string) {
    this.userSubject$.next({...this.user, isAdmin: false})
  }

  logout() {
    this.userSubject$.next(null)
    this.router.navigate(['/']);
  }

  get isAdmin() {
    return this.userSubject$.value?.isAdmin
  }
}
