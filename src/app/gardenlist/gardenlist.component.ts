import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gardenlist',
  templateUrl: './gardenlist.component.html',
  styleUrls: ['./gardenlist.component.css']
})
export class GardenlistComponent implements OnInit {

  constructor() { }

  links = [];

  public gName: string = "";
  public id: number = 1;

  newGarden() {
    this.links.push({ link: this.gName, href: '/garden', id: this.id });
    this.id++;
  }

  ngOnInit() {
  }

}
