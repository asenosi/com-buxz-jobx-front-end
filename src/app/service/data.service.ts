import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAccount } from '../class/user/user-account';
import { UserProfile } from '../class/user/user-profile';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseURL: string = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  registerUserAccount(userAccount: UserAccount) : Observable<any> {
    const headers = {'content-type': 'application/json'}
    console.log(userAccount)
    const body = JSON.stringify(userAccount);
    console.log(body)
    return this.http.post<UserAccount>(this.baseURL + 'v1/jobx/users', body, {'headers':headers});
  }

  saveBasicProfile(profile: UserProfile) {
    const headers = {'content-type': 'application/json'}
    console.log(profile)
    const body = JSON.stringify(profile)
    console.log(body)
    return this.http.post<UserProfile>(this.baseURL + 'v1/jobx/profile', body, {'headers':headers});
  }

  updateUserProfile(profile: UserProfile) {
    const headers = {'content-type': 'application/json'}
    console.log(profile)
    const body = JSON.stringify(profile)
    console.log(body)
    return this.http.post<UserProfile>(this.baseURL + 'v1/jobx/profile', body, {'headers':headers});
    //TODO Change to PUT and linking to id
  }

  getListOfUserProfiles() : Observable<any> {
    return this.http.get(this.baseURL + 'v1/jobx/profile')
  }

  getListOfAllJobs() : Observable<any> {
    return this.http.get(this.baseURL + 'v1/jobx/jobs/all')
  }

  getListOfAllUsers() : Observable<any> {
    return this.http.get(this.baseURL + 'v1/jobx/users/flat')
  }

  getUserProfileById(theProfileId: number) : Observable<any> {
     const allUserUrl = this.baseURL + 'v1/jobx/users/flat';
     const userUrl = `${allUserUrl}/${theProfileId}`;
    return this.http.get(userUrl);
  }

}
