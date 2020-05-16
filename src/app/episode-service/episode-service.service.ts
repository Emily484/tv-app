import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEpisodeData } from '../iepisode-data';
import { environment } from 'src/environments/environment';
import { IEpisodeView } from '../iepisode-view';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EpisodeServiceService {
  constructor(private httpClient: HttpClient) { }

  /**
   *
   * @param episodeEndpoint  // http://api.tvmaze.com/seasons/263/episodes
   */
  getShowEpisodes(showId: number) {
    return this.httpClient.get<IEpisodeData[]>(`${environment.baseUrl}${environment.episodesEndpoint}${showId}/episodes`).pipe(map((data: IEpisodeData[]) => data.map(item => this.trasformToIEpisodeView(item))));
     }

  trasformToIEpisodeView(data: IEpisodeData): IEpisodeView {
    return {
      episodeName: data.name,
      seasonNumber: data.season,
      episodeNumber: data.number,
      airdate: new Date(data.airdate)
    }
  }

}