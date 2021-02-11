import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  favoriteMovieGenre: string;
  genres: string[] = ['Action', 'Comedy', 'Horror', 'Drama'];

  morningOrNight: string;
  times: string[] = ['Morning person', 'Night Person'];

  countryVisit: string;
  countries: string[] = ['Australia', 'Iceland', 'Japan', 'Italy'];

  activeOrRelaxed: string;
  activityLevels: string[] = ['Relax', 'Active'];

  foodThoughts: string;
  foodFreqs: string[] = ['Not Often', 'Somewhat Often', 'Very Often', 'Nearly Constantly'];

  journeyOrDestination: string;
  journeys: string[] = ['Journey', 'Destination'];

  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  audioOrVisual: string;
  sensories: string[] = ['Aural', 'Visual'];

  firstDate: string;
  dates: string[] = ['Coffee', 'Movie', 'Dinner', 'Hike'];

  dogOrCat: string;
  pets: string[] = ['Dog', 'Cat'];

  zooAnimal: string;
  animals: string[] = ['Tiger', 'Elephant', 'Panda', 'Penguin'];

  messyOrClean: string;
  tidinessLevels: string[] = ['Messy', 'Clean'];

  favoriteMusicGenre: string;
  musics: string[] = ['Rock', 'Pop', 'Rap', 'Country'];

  travelOrHome: string;
  travelDesires: string[] = ['Travel', 'Home']

  politicalAffiliation: string;
  politics: string[] = ['Left-wing', 'Moderate-left', 'Moderate-Right', 'Right-wing'];

}
