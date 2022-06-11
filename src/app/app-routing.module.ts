import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { SearchRestaurantsPageComponent } from './search-restaurants-page/search-restaurants-page.component';
import { BookingDetailsPageComponent } from './booking-details-page/booking-details-page.component';
import { OwnerSignInPageComponent } from './owner-sign-in-page/owner-sign-in-page.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';
import { UserSignInPageComponent } from './user-sign-in-page/user-sign-in-page.component';
import { PageNotFoundPageComponent } from './page-not-found-page/page-not-found-page.component';
import { UserBookingsComponent } from './user-profile-page/user-bookings/user-bookings.component';
import { UserFavRestaurantsComponent } from './user-profile-page/user-fav-restaurants/user-fav-restaurants.component';
import { UserReviewMessagesComponent } from './user-profile-page/user-review-messages/user-review-messages.component';
import { UserSettingsComponent } from './user-profile-page/user-settings/user-settings.component';

const routes: Routes = [
  { path: 'restaurant-page', component: RestaurantPageComponent },
  { path: 'checkout-booking', component: BookingPageComponent },
  { path: 'search-restaurants', component: SearchRestaurantsPageComponent },
  { path: 'booking-details', component: BookingDetailsPageComponent },
  { path: 'owner-sign-in', component: OwnerSignInPageComponent },
  { path: 'sign-in', component: UserSignInPageComponent },
  {
    path: 'user-profile',
    component: UserProfilePageComponent,
    children: [
      { path: 'bookings', component: UserBookingsComponent },
      { path: 'fav-restaurants', component: UserFavRestaurantsComponent },
      { path: 'review-messages', component: UserReviewMessagesComponent },
      { path: 'settings', component: UserSettingsComponent },
    ],
  },
  { path: '**', component: PageNotFoundPageComponent },
  { path: '', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
