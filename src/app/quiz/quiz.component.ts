import { Component, OnInit } from '@angular/core';
import { SnackService } from '../services/snack.service';
import { DatabaseService } from '../services/database.service';
import { Answers } from './answers.model'

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  constructor(private snack: SnackService, private db: DatabaseService) { }

  ngOnInit(): void {
  }

  inputArray: string[];
  allDefinedBinary: boolean = false;

  userGender: string;
  genders: string[] = ['Man', 'Woman', 'Non Binary'];

  genderAttraction: string[];
  attractions: string[] = ['Man', 'Woman', 'Non Binary'];

  userAge: number;

  ageAttraction: number;

  state: string;
  states: string[] = []

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

  // calls on submit button click. Gathers all the radio buttons and puts them into an array. Checks each array item to ensure all inputs were selected. If all were selected sends that form to the firebase database.
  submitForm() {
    this.inputArray = [this.favoriteMovieGenre, this.morningOrNight, this.countryVisit, this.activeOrRelaxed, this.foodThoughts, this.journeyOrDestination, this.favoriteSeason,
    this.audioOrVisual, this.firstDate, this.dogOrCat, this.zooAnimal, this.messyOrClean, this.favoriteMusicGenre, this.travelOrHome, this.politicalAffiliation]

    this.inputArray.forEach(element => this.checkForUndefined(element))
    if (this.allDefinedBinary === true){
      //TODO: replace this with logic that sends the array to firebase and stores it under the user logged in currently
      console.log("all items selected")
      this.db.createAnswerArray(this.inputArray);
    }
  }

  // checks that every input has a value and if it doesn't sends an error message to the user
  checkForUndefined(item) {
    if (item === undefined){
      this.snack.formError();
      this.allDefinedBinary = false;
    }
    else {
      this.allDefinedBinary = true;
    }
  }

}
