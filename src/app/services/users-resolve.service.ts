import {Injectable} from '@angular/core';
import {UserService} from "./user.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {User} from "../modules/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class UsersResolveService implements Resolve<User> {

  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {

    return this.userService.getUser(+route.params['id']);
  }

}
