import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Madking} from "../model/madking.model";

@Injectable()
export class MadkingService {
  constructor(private http: HttpClient){}

  getAll() {

    /*return this.http.get('/madkings')
      .toPromise()
      .then(res => <Madking[]> res.json().data)
      .then(data => { return data; });*/

    return this.http.get('http://localhost:8080/madkings');
  }

  save(madkings: Madking[], transactional: boolean) {
    return this.http.put('http://localhost:8080/madkings?transactional='+transactional, madkings);
  }
}
