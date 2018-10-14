import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
   users:User[];
  constructor() { }

  ngOnInit() {
    this.users = [];
  }

  addUser(fName, lName, userName){
    this.users.push({fname:fName, lname:lName, username: userName})
    console.log(this.users)
  }
  deleteUser(user){
    for (let i=0; i < this.users.length; i++){
      if (this.users[i] === user){
        this.users.splice(i, 1);
      }
    }
  }

}

interface User {
  fname:string,
  lname:string,
  username:string
}
