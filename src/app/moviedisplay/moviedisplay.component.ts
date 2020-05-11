import { Component, OnInit, ViewEncapsulation, Input, Output, ChangeDetectorRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import {Movie} from '../interfaces/Movie';
import {MovieDetail} from '../interfaces/MovieDetail';
import {MovieService} from '../services/movie.service';

@Component({
  selector: 'app-moviedisplay',
  template: `

  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  </head>

  <body>

    <div class="row">
      <div class="col-md-12">
      <div class="row ml-4" style="align-content: center; justify-content: center;display: flex;">
        <div *ngFor="let movie of displaymovies">
          <div class="card mt-2 ml-4" style="max-width: 8rem;background-color: transparent;border-color: transparent;">
            <img class="card-img-top" src="https://image.tmdb.org/t/p/original{{movie.poster_path}}" alt="" style="height: 200px; ">
              <div class="card-body">
                <h4 class="title" style="white-space: nowrap!important; width: 100px!important; overflow: hidden!important; text-overflow: ellipsis!important;  font-size: 13px;text-align: left;text-transform: uppercase;color: #000;margin-left: -20px;">{{movie.title}}</h4>
                <h4 class="year" style=" font-size: 13px; color: gray; margin-left: -20px;">{{movie.release_date}}</h4>
                <h4 class="title" style="font-size: 13px;text-align: left;text-transform: uppercase;color: #000;margin-left: -20px;">R 80</h4>
              </div>
              <button type="button" class="btn btn-success" (click)="selectMovie(movie);">Details</button>
          </div>
        </div>
        </div>
      </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

  </body>

  `,
  styles: [`
  
    .moviecard:hover{
      -webkit-box-shadow: -1px 9px 40px -12px rgba(0,0,0,0.75);
      -moz-box-shadow: -1px 9px 40px -12px rgba(0,0,0,0.75);
      box-shadow: -1px 9px 40px -12px rgba(0,0,0,0.75);;
      opacity: .4;
      cursor: pointer;
    }

  `],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MoviedisplayComponent implements OnInit {

  @Input() searchedmovies : Movie[] = [];
  @Output() result = new EventEmitter<Movie>();
  displaymovies : MovieDetail[] = [];
  outputmovie : Movie = {id:0,title:""};

  constructor(private movieservice : MovieService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.getMovieDetails();
    console.log("Movies Processed");

  }

  getMovieDetails(){

    this.displaymovies = [];

    for (let index = 0; index < this.searchedmovies.length; index++) {
      this.movieservice.getMovies(this.searchedmovies[index].id).subscribe(
        (data:any) =>
        {
          this.displaymovies.push(data);
          this.ref.detectChanges();
        }
      );
    }
  }

  selectMovie(selectedmovie : MovieDetail){
    this.outputmovie.id = selectedmovie.id;
    this.outputmovie.title = selectedmovie.title;
    this.result.emit(this.outputmovie);
  }

}