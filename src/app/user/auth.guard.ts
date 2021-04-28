import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SnackService } from '../services/snack.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { DatabaseService } from '../services/database.service';
import { Answers } from '../quiz/answers.model';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private afAuth: AngularFireAuth,
    private snack: SnackService,
    private dbs: DatabaseService
  ) {}
  userAnswers: Answers;
  sub: Subscription;

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {

    const user = await this.afAuth.currentUser;
    const results = await this.dbs.getUserAnswers().subscribe(userAnswers => (this.userAnswers = userAnswers))
    const canAccess = !!user;
    if (!canAccess) {
      this.snack.authError();
    } 
    // this else blocks users from retaking the quiz
    else {
      console.log(results)
      console.log(this.userAnswers)
      if (this.userAnswers == undefined || this.userAnswers == []){
        return canAccess;
      }
      else {
        this.snack.alreadyAnsweredError();
      }
    }
    
  }
}