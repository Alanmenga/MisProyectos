import { Component, OnInit } from '@angular/core';
import { UsersService } from './04-service-http-module/users.service';
import { User } from './models/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.getUsers();
  }
  users:User[] = [];

  constructor( private usersService:UsersService ) {
    
  }

  par( numero:number ):boolean{
    return numero%2 === 0 ? true : false;
  }

  getUsers() {
    this.usersService.getAll().subscribe( users => {
      this.users = users;
      console.log(this.users);
    });
  }
}
