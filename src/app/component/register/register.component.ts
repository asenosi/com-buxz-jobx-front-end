import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAccount } from 'src/app/class/user/user-account';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userAccount : UserAccount;
  
  loading: boolean = false;
  errorMessage;

  constructor(private router: Router, private dataService: DataService) { 
      this.userAccount = new UserAccount()
  }

  ngOnInit() {
  }

  public registerNewUserAccount() {
    this.dataService.registerUserAccount(this.userAccount)
          .subscribe(
            data => {
              console.log(data);
              this.goToLogin();
            }
          )
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToHome() {
    this.router.navigate(['']);
  }

}
