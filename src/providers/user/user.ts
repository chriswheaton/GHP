import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
import { ApiProvider } from '../api/api';

@Injectable()
export class UserProvider {
	public user: any;
	private _user: any;
	private segment: string = 'User';
	private authSegment: string = "Account";
	constructor(
		private storage: Storage,
		private events: Events,
		private api: ApiProvider
	) {
		this.getAppUser().then((user)=>{
			this.user = user;
		});
	}

	getAppUser(){
		return this.storage.get('user');
	}

	get appUser(){
		return this.user;
	}

	get userAuthenticated(): boolean{
		return (this.user && this.user.authenticated) ? true : false;
	}


	getUserIsAlive() {
		return new Promise((resolve, reject) => {
			this.api.get(`${this.segment}/IsAlive`).subscribe(data => resolve(data));
		});
	}

	getAllUsers() {
		return new Promise((resolve, reject) => {
			this.api.get(`${this.segment}/GetAllUsers`).subscribe(data => resolve(data));
		});
	}

	postGetById(data: any) {
		return new Promise((resolve, reject) => {
			this.api.post(`${this.segment}/GetById`, data).subscribe(data => resolve(data));
		});
	}

	postGetByIds(data: any) {
		return new Promise((resolve, reject) => {
			this.api.post(`${this.segment}`, data).subscribe(data => resolve(data));
		});
	}

	authenticate(data: any){
		return new Promise((resolve, reject) => {
			this.api.post(`${this.authSegment}/Token`, data).subscribe(data => resolve(data));
		});
	}


  public saveUser(){
    this.user = {
      firstName: 'Chris',
      lastName: 'Wheaton',
      authenticated: true
    };
    this.storage.set('user', this.user).then(()=>{
      this.events.publish('user-login');
    });
  }

  public logout(){
    this.user = {};
    this.storage.set('user', this.user).then(()=>{
      this.events.publish('user-logout');
    });
  }
}
