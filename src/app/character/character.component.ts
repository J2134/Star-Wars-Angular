import { Component, OnInit,Input } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  searchSelect: string;
  r2: string = "";
  response: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

search(searchSelect,r2) {
  console.log(searchSelect,r2)
  this.http.get(`https://swapi.co/api/${searchSelect}/?search=${r2}`)
  .subscribe((response) =>{
    this.response = response;
    console.log(this.response);
  })
}
}
