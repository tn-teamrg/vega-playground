import { Component } from '@angular/core';
import * as vega from "vega";
import { View } from 'vega';
// import { View } from 'vega';

@Component({
  selector: 'app-view-api',
  standalone: true,
  imports: [],
  templateUrl: './view-api.component.html',
  styleUrl: './view-api.component.css'
})

export class ViewApiComponent {
  constructor() {
    fetch('https://vega.github.io/vega/examples/bar-chart.vg.json')
      .then(res => res.json())
      .then(spec => render(spec))
      .catch(err => console.error(err));
  }
}

function render(spec: any): any {
  const view = new vega.View(vega.parse(spec), {
    renderer:  'canvas',  // renderer (canvas or svg)
    container: '#view',   // parent DOM container
    hover:     true       // enable hover processing
  });
  return view.runAsync();
}
