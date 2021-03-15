import { Component, OnInit } from '@angular/core';
import { MovieServiceClient } from '../services/movie.service.client';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  hello='hello from Movie Search Component';
  movies = [
    {title: 'Blade Runner 2049'},
    {title: 'Avatar'},
    {title: 'Terminator 2'},
    {title: 'Harry Potter'}
  ]

  constructor(private movieService: MovieServiceClient) { }

  ngOnInit() {
    this.movieService.findBatmanMovies().then(res => this.movies = res.Search);
  }

}



// api key: ff4b29e2
// OMDv API link: http://www.omdbapi.com/?i=tt3896198&apikey=ff4b29e2