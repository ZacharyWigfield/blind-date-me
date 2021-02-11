import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DatabaseService } from '../services/database.service';
import { Answers } from '../quiz/answers.model'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private db: DatabaseService) { }
  userAnswers: Answers;
  sub: Subscription;

  ngOnInit(): void {
    this.sub = this.db.getUserAnswers().subscribe(userAnswers => (this.userAnswers = userAnswers))
  }

  retrieveAnswers() {
    console.log(this.userAnswers[0].answers)
  }

}
