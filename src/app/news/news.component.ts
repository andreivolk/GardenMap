import { Component, OnInit } from '@angular/core';
import { Auth } from '../services/auth0.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private auth: Auth) { }

  ngOnInit() {
  }

}
