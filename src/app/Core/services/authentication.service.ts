import { Injectable, EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';


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

  currentUser(){
    var user = firebase.auth().currentUser;
    return user;
  }

  // delete(user:any){
  //   return user.delete()
  //   .then()
  // }

  usuario():any{
       this.angularFireAuth.onAuthStateChanged(user=>{
       
         
       });//(function(user) {
      //   if (user) {
      //     console.log(user);
      //     return user;
      //   } else {
      //     console.log("Falló");
      //   }
      // });

    }
}
