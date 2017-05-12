import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import * as Konva from 'konva';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { UnitconversionService } from '../services/unitconversion.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.css'],
  providers: [UnitconversionService]
})
export class GardenComponent implements OnInit {

  constructor(private route: ActivatedRoute, private conversion: UnitconversionService) { }

  //Shape selector for creating new shapes
  shapeSelect = 'sqr';
  shapes = [{ code: 'sqr', name: 'Square' },
    { code: 'cir', name: 'Circle' },
    { code: 'rec', name: 'Rectangle' },
    { code: 'hex', name: 'Hexagon' }];

  //Unit selector for measurements
  unitSelect = 'Meters';
  units = [{ name: 'Metric', unit: 'Meters' },
    { name: 'Standard', unit: 'Feet' }];

  public nHeight: number;
  public nWidth: number;
  public nRadius: number;

  /*Calculate X and Y limits because dragBoundFunc only takes
  top left corner into consideration*/
  private xLimit(width, radius) {
    if (radius) {
      return width * 1 + 20;
    }
    else {
      return 1500 - width - 20;
    }
  }
  private yLimit(height, radius) {
    if (radius) {
      return height * 1 + 20;
    }
    else {
      return 600 - height - 20;
    }
  }
  private resetNumbers(){
    this.nHeight = undefined;
    this.nWidth = undefined;
    this.nRadius = undefined;
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
    var xLimit = this.xLimit(this.conversion.convertSize(this.nWidth, 'width', this.unitSelect), false);
    var yLimit = this.yLimit(this.conversion.convertSize(this.nHeight, 'height', this.unitSelect), false);
    var newBox = new Konva.Rect({
      x: Math.floor(Math.random() * (1180 - 100 + 1) + 100),
      y: Math.floor(Math.random() * (620 - 100 + 1) + 100),
      width: this.conversion.convertSize(this.nWidth, 'width', this.unitSelect),
      height: this.conversion.convertSize(this.nHeight, 'height', this.unitSelect),
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
    this.resetNumbers();
  }
  createSquare() {
    var xLimit = this.xLimit(this.conversion.convertSize(this.nHeight, 'height', this.unitSelect), false);
    var yLimit = this.yLimit(this.conversion.convertSize(this.nHeight, 'height', this.unitSelect), false);
    var newBox = new Konva.Rect({
      x: Math.floor(Math.random() * (1180 - 100 + 1) + 100),
      y: Math.floor(Math.random() * (620 - 100 + 1) + 100),
      width: this.conversion.convertSize(this.nHeight, 'height', this.unitSelect),
      height: this.conversion.convertSize(this.nHeight, 'height', this.unitSelect),
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
    this.resetNumbers();
  }
  createCircle() {
    var xLimit = this.xLimit(this.conversion.convertSize(this.nRadius, 'radius', this.unitSelect), false);
    var yLimit = this.yLimit(this.conversion.convertSize(this.nRadius, 'radius', this.unitSelect), false);
    var xLimitLeft = this.xLimit(this.conversion.convertSize(this.nRadius, 'radius', this.unitSelect), true);
    var yLimitTop = this.yLimit(this.conversion.convertSize(this.nRadius, 'radius', this.unitSelect), true);
    var newBox = new Konva.Circle({
      x: Math.floor(Math.random() * (1180 - 100 + 1) + 100),
      y: Math.floor(Math.random() * (620 - 100 + 1) + 100),
      radius: this.conversion.convertSize(this.nRadius, 'radius', this.unitSelect),
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
    this.resetNumbers();
  }
  createHexagon() {
    var xLimit = this.xLimit(this.conversion.convertSize(this.nRadius, 'radius', this.unitSelect), false);
    var yLimit = this.yLimit(this.conversion.convertSize(this.nRadius, 'radius', this.unitSelect), false);
    var xLimitLeft = this.xLimit(this.conversion.convertSize(this.nRadius, 'radius', this.unitSelect), true);
    var yLimitTop = this.yLimit(this.conversion.convertSize(this.nRadius, 'radius', this.unitSelect), true);
    var newBox = new Konva.RegularPolygon({
      x: Math.floor(Math.random() * (1180 - 100 + 1) + 100),
      y: Math.floor(Math.random() * (620 - 100 + 1) + 100),
      sides: 6,
      radius: this.conversion.convertSize(this.nRadius, 'radius', this.unitSelect),
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
    this.resetNumbers();
  }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
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
