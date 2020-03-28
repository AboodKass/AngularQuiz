import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pageCount = 1;
  users: User[] = [];

  searchId;

  pageEvent: PageEvent; 
  public pageSize = 6;
  public currentPage = 0;
  public totalSize = 0;

  isLoading: boolean;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public router: Router, private _http: HttpService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.getServerData(null);
  }

  public getServerData(event?:PageEvent){
    this._http.getUsers(event?.pageIndex+1).subscribe(
      response =>{
          this.currentPage = response['page']-1;
          this.pageSize = response['per_page'];
          this.totalSize = response['total'];
          this.users = response['data'];
          console.log(this.users);
          setTimeout(() => {
            this.isLoading = false;
          },
          1500);
      },
      error =>{
        console.log('error:');
      }
    );
    return event;
  }
}
