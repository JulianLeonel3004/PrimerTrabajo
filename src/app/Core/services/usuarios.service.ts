import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private angularFireDataBase: AngularFireDatabase) { }

  getUsers(){
    return this.angularFireDataBase.list('/users').valueChanges();
  }

  getUserByid(uid){
    return this.angularFireDataBase.object('/users/'+ uid).valueChanges();
  }
  
  public createUser(user){
    return this.angularFireDataBase.object('/users/' + user.uid).set(user);
  }

  editUser(user){
    return this.angularFireDataBase.object('/usuers/' + user.uid).set(user);
  }

}
