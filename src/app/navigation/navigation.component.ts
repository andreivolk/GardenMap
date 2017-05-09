import { Component, OnInit } from '@angular/core';
import { Auth } from '../auth0.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private auth: Auth) { }

  ngOnInit() {
  }

}
