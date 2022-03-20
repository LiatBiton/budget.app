import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model'

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

    private _userDb: User = 
        {
        id: 'u101',
        name: 'Liat',
        budget: 3000,
        goal: 150,
        spend: 391.15,
    };

    private _user$ = new BehaviorSubject<User>({
        id: '',
        name: '',
        budget: 0,
        goal: 0,
        spend: 0,
    });

    public user$ = this._user$.asObservable()

    getUser(){
        const user = this._userDb
        console.log(user)
        this._user$.next(user)
    }

    public saveUser(user: User) {
        return this._editUser(user)
    }

    private _editUser(user: User) {
        this._userDb = user
        return of(user)
    }

}