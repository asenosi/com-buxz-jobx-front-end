import { Component } from '@angular/core';
import { UserProfile } from './class/user/user-profile';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'com-buxz-jobx-front';
  profiles: UserProfile[];

  loading: boolean = false;
  errorMessage;

  constructor(private dataService: DataService) {

  }

  public getListOfAllProfiles() {
    this.loading = true;
    this.errorMessage = "";
    this.dataService.getListOfUserProfiles()
          .subscribe(
            (response) => {
              console.log('Response Recieved')
              this.profiles = response;
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
