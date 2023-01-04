import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvancedSearchComponent } from './component/general/advanced-search/advanced-search.component';
import { HomeComponent } from './component/home/home.component';
import { JobComponent } from './component/job/job.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { SearchComponent } from './component/general/search/search.component';
import { AboutUsComponent } from './component/general/about-us/about-us.component';
import { EditProfileComponent } from './component/edit-profile/edit-profile.component';
import { UserProfileDetailComponent } from './component/user-profile-detail/user-profile-detail.component';

const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "profiles"},
  {path: "profiles/:id", component: UserProfileDetailComponent},
  {path: "profiles", component: HomeComponent},
  {path: "jobs", component: JobComponent},
  {path: "search", component: SearchComponent},
  {path: "advanced", component: AdvancedSearchComponent},
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "about", component: AboutUsComponent},
  {path: "edit-profile", component: EditProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
