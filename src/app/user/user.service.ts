import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.class';

const baseurl: string = "http://localhost:8080/api/users/";


@Injectable({
  providedIn: 'root'
})
export class UserService {



  constructor(
    private http: HttpClient
  ) { 

  }
//prs do this for every table
  list(): Observable<User[]> {
    return this.http.get(`${baseurl}`) as Observable<User[]>;
  }
//prs do this for every table
  get(id:number):Observable<User>{
    return this.http.get(`${baseurl}${id}`) as Observable<User>;
  }
  add(user:User):Observable<User>{
    return this.http.post(`${baseurl}`, user) as Observable<User>;
  }
  update(user:User): Observable<User>{
    return this.http.put(`${baseurl}${user.id}`,user) as Observable<User>;
  }
  delete(user:User): Observable<User>{
    return this.http.delete(`${baseurl}${user.id}`) as Observable<User>;
  }

}
