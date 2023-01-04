import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/class/job/job';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  jobs: Job[];

  loading: boolean = false;
  errorMessage;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getListOfAllJobs();
  }

  public getListOfAllJobs() {
    this.loading = true;
    this.errorMessage = "";
    this.dataService.getListOfAllJobs()
          .subscribe(
            (response) => {
              console.log('Response Recieved - All jobs')
              this.jobs = response;
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
