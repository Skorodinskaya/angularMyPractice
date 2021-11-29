import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataTransferService} from "./data-transfer.service";
import {IAUth, IToken} from "../interfaces";
import {Observable, tap} from "rxjs";
import {urls} from "../configs";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private accessTokenKey = 'access';
  private refreshTokenKey = 'refresh'

  constructor(private httpClient:HttpClient, private transferService:DataTransferService, private userService:UserService) {
  }

  login(user: IAUth):Observable<IToken> {
    return this.httpClient.post<IToken>(urls.auth, user)
      .pipe(
        tap((token: IToken)=>{
          this.userService.getMe().subscribe(value => {
            this.transferService.currentUserSubject.next(value)
          })
            this.setTokens(token)
        })
      )
  }

  refreshToken():Observable<IToken>{
    return this.httpClient.post<IToken>(`${urls.auth}/refresh`, {refresh: this.getRefreshToken()})
      .pipe(
        tap((token:IToken) => {
          this.setTokens(token)
        })
      )
  }

  isAuthenticated():boolean {
    return !!this.getAccessToken()
  }

  private setAccessToken(access: string):void {
    localStorage.setItem(this.accessTokenKey, access)
  }

  private setRefreshToken(refresh: string):void {
    localStorage.setItem(this.refreshTokenKey, refresh)
  }

  getAccessToken():string | null {
    return localStorage.getItem(this.accessTokenKey)
  }

  private getRefreshToken():string | null {
    return localStorage.getItem(this.refreshTokenKey)
  }

  private setTokens(token: IToken):void {
    const {access, refresh} = token;

    this.setAccessToken(access);
    this.setRefreshToken(refresh)
  }

}
