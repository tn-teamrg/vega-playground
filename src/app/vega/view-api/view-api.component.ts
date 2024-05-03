import { Component } from '@angular/core';
import * as vega from "vega";

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
    // * NOTE: svg or canvas
    renderer: 'canvas',
    // * NOTE: DOM container
    container: '#view',
    // * NOTE: processing for hover
    hover: true
  });
  return view.runAsync();
}
