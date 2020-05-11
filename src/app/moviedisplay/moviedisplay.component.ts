import { Component, OnInit, ViewEncapsulation, Input, Output } from '@angular/core';
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
  <div class="container">
    <div class="row">
      <div *ngFor="let movie of displaymovies" class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4" style="padding-bottom: 25px;" (click)="selectMovie(movie)" [class.selected]="movie === outputmovie">
        <div class="card moviecard" style="height: 100%;box-shadow: 2px 5px 5px 3px rgb(124, 123, 123);">
            <img class="card-img-top" src="https://image.tmdb.org/t/p/original{{movie.backdrop_path}}" alt="" style="height: 200px;">
            <div class="card-body">
              <h4 class="card-title">{{movie.title}}</h4>
             </div>
        </div>
      </div>
    </div>
  </div>

  <button (click)="show();">Show Movies</button>

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

  constructor(private movieservice : MovieService) { }

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
        }
      );
    }
  }

  show(){
    console.log("Searched Movies " + this.displaymovies.length);
  }

  selectMovie(selectedmovie : MovieDetail){
    this.outputmovie.id = selectedmovie.id;
    this.outputmovie.title = selectedmovie.title;
    this.result.emit(this.outputmovie);
  }

}