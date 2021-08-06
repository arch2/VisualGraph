import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plugin-graph',
  templateUrl: './plugin-graph.component.html',
  styleUrls: ['./plugin-graph.component.scss']
})
export class PluginGraphComponent implements OnInit {
  @Input() config: any;
  constructor() { }

  ngOnInit(): void {
  }

}
