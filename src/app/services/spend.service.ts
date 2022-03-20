import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
// import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Spend, SpendDb } from '../models/spend.model';
import { FilterBy } from '../models/filter-by.model';


@Injectable({
  providedIn: 'root'
})
export class SpendService {

  constructor(private http: HttpClient) { }

//   expenses: [
//     {name: 'Rent' , value: 2500},
//     {name: 'Resturants' , value: 187},
//     {name: 'Shooping' , value: 312},
//     {name: 'Groceries' , value: 624},
//     {name: 'Gym' , value: 155},
//     {name: 'Gym' , value: 700},
//     {name: 'Groceries' , value: 111},
// ],
// expensesTotal: {}

// private _spendsDb: Spend[] = [
//   { _id: 's123', name: 'Rent', totalSpend: 123},
//   { _id: 's124', name: 'Resturants', totalSpend: 123},
//   { _id: 's125', name: 'Shooping', totalSpend: 312},
//   { _id: 's126', name: 'Groceries', totalSpend: 456},
//   { _id: 's126', name: 'Gym', totalSpend: 331},
// ];

  // Mock database
  private _spendsDb: SpendDb = {
        rows: [
          {_id:'s100' ,name: 'Rent' , value: 2500, timeStemp: 1646050497762, description: 'fixed charge', methodsPayment: 'MAX credit' },
          {_id:'s101', name: 'Restaurants' , value: 187, timeStemp: 1646050497762, description: 'brunch with daniel', methodsPayment: 'cash'},
          {_id:'s102', name: 'Shopping' , value: 312, timeStemp: 1646050497762, description: 'ZARA', methodsPayment: 'MAX credit'},
          {_id:'s103', name: 'Groceries' , value: 624, timeStemp: 1646050497762, description: 'weekly', methodsPayment: 'cash'},
          {_id:'s104', name: 'Gym' , value: 155, timeStemp: 1646050497762, description: 'Locker Room', methodsPayment: 'Leumi credit'},
          {_id:'s105', name: 'Gym' , value: 700, timeStemp: 1646050497762, description:'personal training', methodsPayment: 'cash'},
          {_id:'s106', name: 'Groceries' , value: 111, timeStemp: 1646050497762,description: 'for friday dinner', methodsPayment: 'cash'}
        ],
        totals: {}
  };

  private _spends$ = new BehaviorSubject<SpendDb>({
    rows: [],
    totals: {}
  });
  public spends$ = this._spends$.asObservable()

  private _filterBy$ = new BehaviorSubject<FilterBy>({ name: '' });
  public filterBy$ = this._filterBy$.asObservable()

  private buildDb(rows: Spend[] = this._spendsDb.rows) : SpendDb{
    const totals = rows.reduce((acc, curr) => {
      if (!acc[curr.name]){
        acc[curr.name] = curr.value
      }else{
        acc[curr.name] += curr.value
      }

      return acc;
    }, {} as Record<string, number>);
    return { rows, totals }
  }

  public query() {
    const filterBy = this._filterBy$.getValue()
    const rows = this._spendsDb.rows.filter(({ name }) => {
      return name.toLowerCase().includes(filterBy.name.toLowerCase());
    });
    this._spends$.next(this.buildDb(rows));
  }

  public getEmptySpend() {
    return {name: '' , value: 0, timeStemp: Date.now(), description: '', methodsPayment: '' }
    // return { name: '', totalSpend: 0 }
  }

  public remove(spendId: string) {
    console.log('on service')
    const spends = this._spendsDb.rows
    const spendIdx = spends.findIndex(spend => spend._id === spendId)
    spends.splice(spendIdx, 1)
    this._spends$.next(this.buildDb());
    return of({})
  }
  
  public getById(spendId: string): Observable<Spend> {
    const spend = this._spendsDb.rows.find(spend => spend._id === spendId)
    return of(spendId ? { ...spend } : null)
  }

  public save(spend: Spend) {
    console.log('on save')
    return spend._id ? this._edit(spend) : this._add(spend)
  }

  public setFilterBy(filterBy: FilterBy) {
    this._filterBy$.next(filterBy)
    this.query()
  }

  private _add(spend: Spend) {
    console.log('on _add service')
    spend._id = this._makeId()
    this._spendsDb.rows.push(spend)
    this._spends$.next(this.buildDb())
    console.log(this._spendsDb)
    return of(spend)
  }

  private _edit(spend: Spend) {
    const spends = this._spendsDb.rows
    const spendIdx = spends.findIndex(_spend => _spend._id === spend._id)
    spends.splice(spendIdx, 1, spend)
    this._spends$.next(this.buildDb());
    return of(spend)
  }

  private _makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}

