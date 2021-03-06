import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowInfoComponent } from './show-info/show-info.component';
import { CastInfoComponent } from './cast-info/cast-info.component';
import { ShowEpisodesListComponent } from './episode-info/show-episodes-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SearchShowsComponent } from './search-shows/search-shows.component';
import { StaticPageComponent } from './static-page/static-page.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  //empty path should route to MainPageComponent
  { path: '', component: AppComponent },

  //empty path should route to MainPageComponent
  { path: 'mainpage', component: MainPageComponent },

  //empty path should route to StaticPageComponent
  { path: 'index', component: StaticPageComponent },

  //Given path should route to SearchShowsComponent called in app
  { path: 'searchshows/:searchTerm', component: SearchShowsComponent },

  //Given path should route to ShowInfoComponent
  { path: 'show-info/:id', component: ShowInfoComponent },

  //Given path should route to ShowEpisodesListComponent
  { path: 'episode-info/:id', component: ShowEpisodesListComponent },

  //Given path should route to CastInfoComponent
  { path: 'cast-info/:id', component: CastInfoComponent },

  ////Given path should route to PageNotFoundComponent
  { path: 'error', component: PageNotFoundComponent },

  //Given path should route to PageNotFoundComponent Wildcard route should be at atlast
  { path: '**', redirectTo: '/error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
