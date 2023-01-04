import { Component, OnInit } from '@angular/core';
import { FlatUserAccount } from 'src/app/class/user/flat-user-account';
import { UserAccount } from 'src/app/class/user/user-account';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userAccounts: FlatUserAccount[];

  loading: boolean = false;
  errorMessage;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getListOfAllProfiles();
    this.getListOfAllUsers();
  }

  public getListOfAllProfiles() {
    this.loading = true;
    this.errorMessage = "";
    this.dataService.getListOfUserProfiles()
          .subscribe(
            (response) => {
              console.log('Response Recieved')
              this.userAccounts = response;
              console.log('Response ' + response);
            },
            (error) => {
              console.error('Request failed with error')
              this.errorMessage = error;
              this.loading = false;
            },
            () => {
              this.loading = false;
            }
          )
  }

  public getListOfAllUsers() {
    this.loading = true;
    this.errorMessage = "";
    this.dataService.getListOfAllUsers()
          .subscribe(
            (response) => {
              console.log('Response Recieved')
              this.userAccounts = response;
              console.log('Response ' + response);
            },
            (error) => {
              console.error('Request failed with error')
              this.errorMessage = error;
              this.loading = false;
            },
            () => {
              this.loading = false;
            }
          )
  }
}
