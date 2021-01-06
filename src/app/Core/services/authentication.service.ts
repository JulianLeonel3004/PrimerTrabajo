import { Injectable, EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private angularFireAuth:AngularFireAuth) { }
  

  loginWithEmail(email:string, password:string){
    return this.angularFireAuth.signInWithEmailAndPassword(email, password);
  }

  registerWithEmail(email:string, password:string){
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password);
  }

  getStatus():Observable<any>{
    return this.angularFireAuth.authState;
  }

  logout(){
    return this.angularFireAuth.signOut();
  }

  usuario(){
      var user = this.angularFireAuth.onAuthStateChanged(function(user) {
        if (user) {
          console.log(user);
          
        } else {
          console.log("Falló");
        }
      });

    }
}
