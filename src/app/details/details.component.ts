import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id;
  first_name;
  last_name;
  email;
  avatar;
  company;
  url;
  text;

  constructor(private route: ActivatedRoute, private _http: HttpService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => { 
      
      this.id = params.get('id'); 

      this._http.getUserDetails(this.id).subscribe(
        response =>{
            this.first_name = response['data']['first_name'];
            this.last_name = response['data']['last_name'];
            this.email = response['data']['email'];
            this.avatar = response['data']['avatar'];
            this.company = response['ad']['company'];
            this.url = response['ad']['url'];
            this.text = response['ad']['text'];
            console.log(this.text);
        },
        error =>{
          console.log('error:');
        }
      );
  });
  }

}
