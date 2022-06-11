import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RecommendedRestaurantsComponent } from './home-page/recommended-restaurants/recommended-restaurants.component';
import { CuisinesComponent } from './home-page/cuisines/cuisines.component';
import { TopTagsComponent } from './home-page/top-tags/top-tags.component';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { RestaurantDetailsComponent } from './booking-page/restaurant-details/restaurant-details.component';
import { BookingDetailsComponent } from './booking-page/booking-details/booking-details.component';
import { BookingDetailsPageComponent } from './booking-details-page/booking-details-page.component';
import { BookingInfoComponent } from './booking-details-page/booking-info/booking-info.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';
import { NavComponent } from './user-profile-page/nav/nav.component';
import { UserBookingsComponent } from './user-profile-page/user-bookings/user-bookings.component';
import { UserFavRestaurantsComponent } from './user-profile-page/user-fav-restaurants/user-fav-restaurants.component';
import { UserReviewMessagesComponent } from './user-profile-page/user-review-messages/user-review-messages.component';
import { UserSettingsComponent } from './user-profile-page/user-settings/user-settings.component';
import { SearchFormComponent } from './home-page/search-form/search-form.component';
import { OwnerSignInPageComponent } from './owner-sign-in-page/owner-sign-in-page.component';
import { UserSignInPageComponent } from './user-sign-in-page/user-sign-in-page.component';
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component';
import { SearchRestaurantsPageComponent } from './search-restaurants-page/search-restaurants-page.component';
import { PageNotFoundPageComponent } from './page-not-found-page/page-not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    RecommendedRestaurantsComponent,
    CuisinesComponent,
    TopTagsComponent,
    BookingPageComponent,
    RestaurantDetailsComponent,
    BookingDetailsComponent,
    BookingDetailsPageComponent,
    BookingInfoComponent,
    UserProfilePageComponent,
    NavComponent,
    UserBookingsComponent,
    UserFavRestaurantsComponent,
    UserReviewMessagesComponent,
    UserSettingsComponent,
    SearchFormComponent,
    OwnerSignInPageComponent,
    UserSignInPageComponent,
    RestaurantPageComponent,
    SearchRestaurantsPageComponent,
    PageNotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
