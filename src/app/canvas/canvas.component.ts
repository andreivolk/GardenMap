import { Component, OnInit } from '@angular/core';
import * as Konva from 'konva';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  constructor() { }

  //Shape selector for creating new shapes
  shapeSelect = 'sqr';
  shapes = [{ code: 'sqr', name: 'Square' },
    { code: 'cir', name: 'Circle' },
    { code: 'rec', name: 'Rectangle' },
    { code: 'hex', name: 'Hexagon' }];

  //Unit selector for measurements
  unitSelect = 'met';
  units = [{ code: 'met', name: 'Metric' },
    { code: 'std', name: 'Standard' }];

    /*Ratio setting based on average garden length of 30ft
    and canvas size of 1500px.
    Will be updated once gardens can be created by the user*/
  public convertSize(value){
      var ratio;
      if(this.unitSelect == 'met'){ratio = 1500/9} //Meters
      else{ratio = 1500/30} //Feet"
    return value*ratio;
    }

  public nHeight: number;
  public nWidth: number;
  public nRadius: number;

  /*Calculate X and Y limits because dragBoundFunc only takes
  top left corner into consideration*/
  public xLimit(width, radius) {
    if (radius) {
      return width * 1 + 20;
    }
    else {
      return 1500 - width - 20;
    }
  }
  public yLimit(height, radius) {
    if (radius) {
      return height * 1 + 20;
    }
    else {
      return 600 - height - 20;
    }
  }

  newShape() {
    if (this.shapeSelect == "rec") {
      this.createRectangle();
    }
    else if (this.shapeSelect == "sqr") {
      this.createSquare();
    }
    else if (this.shapeSelect == "cir") {
      this.createCircle();
    }
    else if (this.shapeSelect == "hex") {
      this.createHexagon();
    }
  }
  createRectangle() {
    var xLimit = this.xLimit(this.convertSize(this.nWidth), false);
    var yLimit = this.yLimit(this.convertSize(this.nHeight), false);
    var newBox = new Konva.Rect({
      x: Math.floor(Math.random() * (1180 - 100 + 1) + 100),
      y: Math.floor(Math.random() * (620 - 100 + 1) + 100),
      width: this.convertSize(this.nWidth),
      height: this.convertSize(this.nHeight),
      fill: '#FFFFFF',
      stroke: 'black',
      strokeWidth: 4,
      draggable: true,
      dragBoundFunc: function(pos) {
        var newY = pos.y;
        var newX = pos.x;
        if (newY < 20) { newY = 20 }
        if (newY > yLimit) { newY = yLimit }
        if (newX < 20) { newX = 20 }
        if (newX > xLimit) { newX = xLimit }
        return {
          x: newX,
          y: newY
        };
      }
    });
    layer.add(newBox);
    layer.draw();
  }
  createSquare() {
    var xLimit = this.xLimit(this.convertSize(this.nWidth), false);
    var yLimit = this.yLimit(this.convertSize(this.nWidth), false);
    var newBox = new Konva.Rect({
      x: Math.floor(Math.random() * (1180 - 100 + 1) + 100),
      y: Math.floor(Math.random() * (620 - 100 + 1) + 100),
      width: this.convertSize(this.nWidth),
      height: this.convertSize(this.nWidth),
      fill: '#FFFFFF',
      stroke: 'black',
      strokeWidth: 4,
      draggable: true,
      dragBoundFunc: function(pos) {
        var newY = pos.y;
        var newX = pos.x;
        if (newY < 20) { newY = 20 }
        if (newY > yLimit) { newY = yLimit }
        if (newX < 20) { newX = 20 }
        if (newX > xLimit) { newX = xLimit }
        return {
          x: newX,
          y: newY
        };
      }
    });
    layer.add(newBox);
    layer.draw();
  }
  createCircle() {
    var xLimit = this.xLimit(this.convertSize(this.nRadius), false);
    var yLimit = this.yLimit(this.convertSize(this.nRadius), false);
    var xLimitLeft = this.xLimit(this.convertSize(this.nRadius), true);
    var yLimitTop = this.yLimit(this.convertSize(this.nRadius), true);
    var newBox = new Konva.Circle({
      x: Math.floor(Math.random() * (1180 - 100 + 1) + 100),
      y: Math.floor(Math.random() * (620 - 100 + 1) + 100),
      radius: this.convertSize(this.nRadius),
      fill: '#FFFFFF',
      stroke: 'black',
      strokeWidth: 4,
      draggable: true,
      dragBoundFunc: function(pos) {
        var newY = pos.y;
        var newX = pos.x;
        if (newY < yLimitTop) { newY = yLimitTop }
        if (newY > yLimit) { newY = yLimit }
        if (newX < xLimitLeft) { newX = xLimitLeft }
        if (newX > xLimit) { newX = xLimit }
        return {
          x: newX,
          y: newY
        };
      }
    });
    layer.add(newBox);
    layer.draw();
  }
  createHexagon() {
    var xLimit = this.xLimit(this.convertSize(this.nRadius), false);
    var yLimit = this.yLimit(this.convertSize(this.nRadius), false);
    var xLimitLeft = this.xLimit(this.convertSize(this.nRadius), true);
    var yLimitTop = this.yLimit(this.convertSize(this.nRadius), true);
    var newBox = new Konva.RegularPolygon({
      x: Math.floor(Math.random() * (1180 - 100 + 1) + 100),
      y: Math.floor(Math.random() * (620 - 100 + 1) + 100),
      sides: 6,
      radius: this.convertSize(this.nRadius),
      fill: '#FFFFFF',
      stroke: 'black',
      strokeWidth: 4,
      draggable: true,
      dragBoundFunc: function(pos) {
        var newY = pos.y;
        var newX = pos.x;
        if (newY < yLimitTop) { newY = yLimitTop }
        if (newY > yLimit) { newY = yLimit }
        if (newX < xLimitLeft) { newX = xLimitLeft }
        if (newX > xLimit) { newX = xLimit }
        return {
          x: newX,
          y: newY
        };
      }
    });
    layer.add(newBox);
    layer.draw();
  }

  ngOnInit() {
    initialize();
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
