import { Component, Input, OnInit } from '@angular/core';

import { MultiDataSet, Label, Color } from 'ng2-charts';
import { ChartType } from 'chart.js';


@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})
export class GraphicComponent implements OnInit {

  @Input() title :string = 'Sin titulo';
  @Input() labels : string [];  
  @Input() data;

  public colors :Color[] = [ 
    { backgroundColor: [ '#6857E6', '#009FEE', '#F02059' ]}
  ]

  ngOnInit() {
  }

  constructor () {
  }

}
