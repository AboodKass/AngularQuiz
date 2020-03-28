import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getUsers(pageIndex: number) {
    let idx: string = Number.isNaN(pageIndex) ? '1' : pageIndex.toString();
    console.log("page index: " +  idx);
    return this.http.get('https://reqres.in/api/users?page=' + idx);
  }

  getUserDetails(id: number) {
    let idStr: string = Number.isNaN(id) ? '1' : id.toString();
    return this.http.get('https://reqres.in/api/users/' + idStr);
  }
}
