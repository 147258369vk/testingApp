import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { login, User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public newUser : User={
    uname:'',
    email:'',
    password:''
  }
  public existingUser:login={
    email:'',
    password:''
  }

  constructor(private http:HttpClient) { }

  register(user:User)
  {
    return this.http.post(environment.url+'newUser',user);
  }

  login(user:login)
  {
    return this.http.post(environment.url+'auth',user);
  }


  getselectedUser(id:string)
  {
    return this.http.get(environment.url+ 'SelectUser/'+id);
  }

  //store token variables
  setToken(token:string)
  {
    localStorage.setItem('token',token);
  }

  getToken()
  {
    return localStorage.getItem('token');
  }

  removeToken()
  {
    localStorage.removeItem('token');
    localStorage.removeItem('userid');
  }


  //user id stroage

  setUserId(id:string)
  {
    localStorage.setItem('userid',id);
  }

  getUserId()
  {
    return localStorage.getItem('userid');
  }
  //Token verification

  getPayload()
  {
    var token=JSON.stringify(this.getToken());
    var userPayload=atob(token.split('.')[1]);
    if(userPayload)
    {
      return JSON.parse(userPayload);
    }
    else{
      return null;
    }

  }

  isLoggedIn()
  {
    var userpayload=this.getPayload();
    if(userpayload)
    {
      return userpayload.exp>Date.now()/1000;
    }
    else
    {
      return null;
    }
  }

  UserLoggedIn()
  {
    if(this.getToken()==null && this.getUserId()==null)
    {
      return false;
    }
    else
    {
      return true;
    }
  }

}

