import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { DataService } from './service/data.service';
import { UserProfilesComponent } from './component/user-profiles/user-profiles.component';
import { HeaderComponent } from './component/general/header/header.component';
import { JobComponent } from './component/job/job.component';
import { SearchComponent } from './component/general/search/search.component';
import { AdvancedSearchComponent } from './component/general/advanced-search/advanced-search.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { FooterComponent } from './component/general/footer/footer.component';
import { AboutUsComponent } from './component/general/about-us/about-us.component';
import { EditProfileComponent } from './component/edit-profile/edit-profile.component';
import { AddTestimonialComponent } from './component/add-testimonial/add-testimonial.component';
import { UserProfileDetailComponent } from './component/user-profile-detail/user-profile-detail.component';
import { EducationListComponent } from './component/list/education-list/education-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserProfilesComponent,
    HeaderComponent,
    JobComponent,
    SearchComponent,
    AdvancedSearchComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    AboutUsComponent,
    EditProfileComponent,
    AddTestimonialComponent,
    UserProfileDetailComponent,
    EducationListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
