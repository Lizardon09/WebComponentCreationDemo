import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {MovieDetail} from '../interfaces/MovieDetail';
import {Movie} from '../interfaces/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movieurl : string = "https://api.themoviedb.org/3/movie/";
  private _key : string = "?api_key=1a4c92c1e6d12e202327dea1fbeb4edd";
  private _parm = '&language=en-US';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getMovies(id : number) : Observable<MovieDetail> {
    return this.http.get<MovieDetail>(`${this.movieurl}${id}${this._key}${this._parm}`);
  }

}
