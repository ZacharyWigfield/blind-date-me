import { Component, OnInit } from '@angular/core';
import { SnackService } from '../services/snack.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  constructor(private snack: SnackService) { }

  ngOnInit(): void {
  }

  inputArray: string[];


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

  // calls on submit button click. Gathers all the radio buttons and puts them into an array. Checks the array length to ensure all inputs were selected. Sends that form to the firebase database.
  submitForm() {
    this.inputArray = [this.favoriteMovieGenre, this.morningOrNight, this.countryVisit, this.activeOrRelaxed, this.foodThoughts, this.journeyOrDestination, this.favoriteSeason,
    this.audioOrVisual, this.firstDate, this.dogOrCat, this.zooAnimal, this.messyOrClean, this.favoriteMusicGenre, this.travelOrHome, this.politicalAffiliation]

    this.inputArray.forEach(element => this.checkForUndefined(element))

    console.log(this.inputArray)
  }

  checkForUndefined(item) {
    if (item === undefined){
      this.snack.formError();
    }
  }

}
