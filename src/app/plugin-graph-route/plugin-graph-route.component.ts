import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plugin-graph-route',
  templateUrl: './plugin-graph-route.component.html',
  styleUrls: ['./plugin-graph-route.component.scss']
})
export class PluginGraphRouteComponent implements OnInit {
  config: any = "Hello World";
  constructor() { }

  ngOnInit(): void {
  }

}
