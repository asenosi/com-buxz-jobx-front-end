import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfile } from 'src/app/class/user/user-profile';
import { WorkExperience } from 'src/app/class/work-experience';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  profile: UserProfile;
  experience: WorkExperience;

  constructor(private router: Router, private dataService: DataService) {
    this.profile = new UserProfile();
  }

  ngOnInit() {
  }

  public saveBasicProfile() {
    this.dataService.saveBasicProfile(this.profile)
          .subscribe(
            data => {
              console.log(data)
              this.goToHome();
            }
          )

  }

  public updateUserProfile() {
    this.dataService.updateUserProfile(this.profile)
          .subscribe(
            data => {
              console.log(data)
              this.goToHome();
            }
          )
  }

  goToHome() {
    this.router.navigate(['']);
  }

}
