import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SeasonsListComponentComponent } from './seasons-list-component/seasons-list-component.component';
import { ShowEpisodesListComponent } from './show-episodes-list/show-episodes-list.component';
import { SeasonsListServiceService } from './season-service/seasons-list-service.service';
import { EpisodeServiceService } from './episode-service/episode-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from  '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    SeasonsListComponentComponent,
    ShowEpisodesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatTableModule
  ],
  providers: [EpisodeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
