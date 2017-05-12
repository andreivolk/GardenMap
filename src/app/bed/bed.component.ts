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

  /*We want the bed to take up almost all of the canvas space
  these values will be set to 90-95% of canvas size when complete*/
  private maxHeight: number = 550;
  private maxWidth: number = 1400;

  /*Check wether to use max height or max width when creating shape
  based on the type*/
  private maxHeightArray = ['sqr', 'cir', 'hex'];
  private maxWidthArray = ['rec'];

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
    layer.add(newBox);
    layer.draw();
  }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    initialize();
    this.createRectangle();
  }

}

var layer = new Konva.Layer();

var stage;

function initialize() {
  stage = new Konva.Stage({
    container: 'container',
    width: 1500,
    height: 600
  });
  stage.add(layer);
  layer.draw();
}
