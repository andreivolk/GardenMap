import { Injectable } from '@angular/core';

@Injectable()
export class UnitconversionService {

  constructor() { }

  /*Ratio setting based on average garden length of 30ft
  and canvas size of 1500px.
  Will be updated once gardens can be created by the user*/
  public convertSize(value, type, units) {
    var ratio;
    var convertedValue;
    if (units == 'Meters') { ratio = 1500 / 9 } //Meters
    else if (units == 'Feet') { ratio = 1500 / 30 } //Feet"
    switch (type) {
      case "width":
        if (value * ratio > 1500) { convertedValue = 1400;}
        else { convertedValue = value * ratio }
        break;
      case "height":
        if (value * ratio > 600) { convertedValue = 500;}
        else { convertedValue = value * ratio }
        break;
      case "radius":
        if (value * ratio > 600) { convertedValue = 250;}
        else { convertedValue = value * ratio }
        break;
      default:
        convertedValue = value * ratio
    }
    return convertedValue;
  }

}
