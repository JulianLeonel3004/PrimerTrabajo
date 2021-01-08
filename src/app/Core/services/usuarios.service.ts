import { Injectable, EventEmitter } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import 'firebase/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public inicioSesion = new EventEmitter<Boolean>();
  conectado:Boolean = false;

  constructor(private angularFireDataBase: AngularFireDatabase) { }

  getUsers(){
    return this.angularFireDataBase.list('/users').valueChanges();
  }

  getUserByid(uid):Observable<any>{
    return this.angularFireDataBase.object('/users/'+ uid).valueChanges();
  }
  
  public createUser(user){
    return this.angularFireDataBase.object('/users/' + user.uid).set(user);
  }

  public editUser(user){
    return this.angularFireDataBase.object('/users/' + user.uid).update(user);
  }

}
