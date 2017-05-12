import { Component, OnInit } from '@angular/core';
import * as Konva from 'konva';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bed',
  templateUrl: './bed.component.html',
  styleUrls: ['./bed.component.css']
})
export class BedComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  public layer = new Konva.Layer();

  public stage;

  initialize() {
    this.stage = new Konva.Stage({
      container: 'container',
      width: 1500,
      height: 600
    });
    this.stage.add(this.layer);
    this.layer.draw();
  }

  /*We want the bed to take up almost all of the canvas space
  these values will be set to 90-95% of canvas size when complete*/
  private maxHeight: number = 550;
  private maxWidth: number = 1400;

  /*Check wether to use max height or max width when creating shape
  based on the type*/
  private maxHeightArray = ['sqr', 'cir', 'hex'];
  private maxWidthArray = ['rec'];

  produceSelect;
  private produce = [{ name: 'Tomato', image: '../../assets/images/produce/tomato.png' },
    { name: 'Cucumber', image: '../../assets/images/produce/cucumber.png' },
    { name: 'Onion', image: '../../assets/images/produce/onion.png' },
    { name: 'Eggplant', image: '../../assets/images/produce/eggplant.png' }]

  private getImage() {
    var imageElement = this.produce.find(x => x.name === this.produceSelect);
    return imageElement.image;
  }

  /*Test method in absence of backend to retrieve bed details*/
  private createRectangle() {
    var newBox = new Konva.Rect({
      x: 50,
      y: 25,
      width: this.maxWidth,
      height: this.maxHeight,
      fill: '#FFFFFF',
      stroke: 'black',
      strokeWidth: 4,
      draggable: false
    });
    this.layer.add(newBox);
    this.layer.draw();
  }
  /*Create a group to represent the plant with icon and radius around it
  to see any potential conflicts*/
  addProduce() {
    var group = new Konva.Group({
      x: this.maxWidth / 2,
      y: this.maxHeight / 2,
      draggable: true
    });

    var rootRadius = new Konva.Circle({
      x: this.maxWidth / 2,
      y: this.maxHeight / 2,
      radius: 150,
      fill: 'red',
      stroke: 'black',
      strokeWidth: 1,
      opacity: 0.3
    });
    group.add(rootRadius);

    var imageObj = new Image();
    imageObj.src = this.getImage();

    var plantImage = new Konva.Image({
      x: this.maxWidth / 2 - 40,
      y: this.maxHeight / 2 - 40,
      width: 75,
      height: 75,
      image: imageObj
    });
    group.add(plantImage);

    this.layer.add(group);
    this.layer.draw();
  }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.initialize();
    this.createRectangle();
  }

}
