import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlatUserAccount } from 'src/app/class/user/flat-user-account';
import { UserAccount } from 'src/app/class/user/user-account';
import { UserProfile } from 'src/app/class/user/user-profile';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-user-profile-detail',
  templateUrl: './user-profile-detail.component.html',
  styleUrls: ['./user-profile-detail.component.css']
})
export class UserProfileDetailComponent implements OnInit {

  userAccount: FlatUserAccount;
  //userProfiles: UserProfile[];
  //theUserProfile: UserProfile;
  theProfileId: number = +this.route.snapshot.paramMap.get('id');

  constructor(private dataService: DataService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      () => {
        this.handleUserProfileDetails();
      }
    )
  }

  private handleUserProfileDetails() {
    //Get the "id" param. convert string to number
    const theProfileId: number = +this.route.snapshot.paramMap.get('id');
    this.dataService.getUserProfileById(theProfileId).subscribe(
      data => {
        this.userAccount = data;
        //const profileNo: number = 0;
        //this.theUserProfile = this.userAccount.profiles[theProfileId];
        //console.log('UserJobTitle: ', this.theUserProfile.jobTitle);
      }
    )
  }

}
