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
  shapes = [{code: 'sqr', name: 'Square'},
  {code: 'cir', name: 'Circle'},
  {code: 'rec', name: 'Rectangle'},
  {code: 'hex', name: 'Hexagon'}];

  public nHeight: number;
  public nWidth: number;
  public nRadius: number;

    newShape(){
      if(this.shapeSelect == "rec"){
        this.createRectangle();
      }
      else if(this.shapeSelect == "sqr"){
        this.createSquare();
      }
      else if(this.shapeSelect == "cir"){
        this.createCircle();
      }
      else if(this.shapeSelect == "hex"){
        this.createHexagon();
      }
    }
      createRectangle(){
        var newBox = new Konva.Rect({
            x: Math.floor(Math.random()*(1180-100+1)+100),
            y: Math.floor(Math.random()*(620-100+1)+100),
            width: this.nWidth,
            height: this.nHeight,
            fill: '#FFFFFF',
            stroke: 'black',
            strokeWidth: 4,
            draggable: true
        });

        layer.add(newBox);
        layer.draw();
      }
      createSquare(){
        var newBox = new Konva.Rect({
            x: Math.floor(Math.random()*(1180-100+1)+100),
            y: Math.floor(Math.random()*(620-100+1)+100),
            width: this.nWidth,
            height: this.nWidth,
            fill: '#FFFFFF',
            stroke: 'black',
            strokeWidth: 4,
            draggable: true
        });

        layer.add(newBox);
        layer.draw();
      }
      createCircle(){
        var newBox = new Konva.Circle({
            x: Math.floor(Math.random()*(1180-100+1)+100),
            y: Math.floor(Math.random()*(620-100+1)+100),
            radius: this.nRadius,
            fill: '#FFFFFF',
            stroke: 'black',
            strokeWidth: 4,
            draggable: true
        });

        layer.add(newBox);
        layer.draw();
      }
      createHexagon(){
        var newBox = new Konva.RegularPolygon({
            x: Math.floor(Math.random()*(1180-100+1)+100),
            y: Math.floor(Math.random()*(620-100+1)+100),
            sides: 6,
            radius: this.nRadius,
            fill: '#FFFFFF',
            stroke: 'black',
            strokeWidth: 4,
            draggable: true
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

    function initialize(){
      stage = new Konva.Stage({
              container: 'container',
              width: 1500,
              height: 600
          });
      stage.add(layer);
      layer.draw();
    }

    layer.on("click", function(e) {
       console.log("x-coords: " + e.target.x());
   });
