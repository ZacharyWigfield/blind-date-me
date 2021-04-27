import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz.component';




@NgModule({
  declarations: [
    QuizComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class QuizModule { }
