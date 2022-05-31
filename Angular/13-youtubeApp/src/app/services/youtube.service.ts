import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { YoutubeResponse } from '../models/youtube.models';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private apikey = 'AIzaSyDfvXG2bKR1ryKXze1oCXyHEo7SNFeVslY';
  private playlist = 'UUuaPTYj15JSkETGnEseaFFg';
  private nextPageToken = '';
  
  constructor( private http: HttpClient ) { }

  getVideos() {
    
    const url = `${ this.youtubeUrl }/playlistItems`;
  
    const params = new HttpParams() 
      .set('part', 'snippet')
      .set('maxResults', '10')
      .set('playlistId', this.playlist)
      .set('key', this.apikey)
      .set('pageToken', this.nextPageToken)

    
    return this.http.get<YoutubeResponse>( url, { params } )
              .pipe(

                map( resp => {
                  this.nextPageToken = resp.nextPageToken;
                  return resp.items;
                }),

                // map( items => {
                //   return items.map( video => video.snippet );
                // }),

                map( items => items.map( video => video.snippet ) )
              )
  }
}