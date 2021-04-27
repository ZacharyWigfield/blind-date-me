import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SnackService } from '../services/snack.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { DatabaseService } from '../services/database.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private afAuth: AngularFireAuth,
    private snack: SnackService,
    private dbs: DatabaseService
  ) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {

    const user = await this.afAuth.currentUser;
    const canAccess = !!user;
    if (!canAccess) {
      this.snack.authError();
    } 
    // this else blocks users from retaking the quiz
    else {
      if (!this.dbs.getUserAnswers){
        return canAccess;
      }
      else {
        this.snack.alreadyAnsweredError();
      }
    }
    
  }
}