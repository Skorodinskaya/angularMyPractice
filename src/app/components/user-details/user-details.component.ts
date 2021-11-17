import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {User} from "../../modules/user";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent {

  user: User;

  constructor(private activatedRoute:ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => this.user = value['data']);
  }
}
