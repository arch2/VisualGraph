import { Component, OnInit } from '@angular/core';
import { DataSet } from 'vis-data';

@Component({
  selector: 'app-plugin-graph-route',
  templateUrl: './plugin-graph-route.component.html',
  styleUrls: ['./plugin-graph-route.component.scss']
})
export class PluginGraphRouteComponent implements OnInit {
  config: any = {};

  private nodes = new DataSet<any>(
    [
      { id: 'REQ1', label: 'REQ 1', x: 100, y: 0 },
      { id: 'REL1', label: 'REL', x: 200, y: 0 },
      { id: 'AO', label: 'AO', x: 300, y: 0 },
      { id: 'PA', label: 'PA', x: 400, y: 0 },
      { id: 'PEER', label: 'PEER', x: 400, y: -100 },
      { id: 'IT', label: 'IT', x: 300, y: 100 },
      { id: 'RMLRO', label: 'RML RO', x: 400, y: 100 },
      { id: 'NBS', label: 'NBS', x: 500, y: 0 },
      { id: 'PRISM', label: 'PRISM', x: 600, y: 0 },
      { id: 'REQ2', label: 'REQ 2', x: 700, y: 0 },
      { id: 'NBSRO', label: 'NBS RO', x: 800, y: 0 },
      { id: 'ARCHPA', label: 'ARCH PA', x: 900, y: 0 }
    ]
    //   [
    //   { id: 1, label: 'Node 1', x: 200, y: 40 },
    //   { id: 2, label: 'Node 2', x: 300, y: 440 },
    //   { id: 3, label: 'Node 3', x: 400, y: 40 },
    //   { id: 4, label: 'Node 4', x: 500, y: 40 },
    //   { id: 5, label: 'Node 5', x: 600, y: 40 }
    // ]
  );

  private edges = new DataSet<any>(
    [
      { id: 'a', from: 'REQ1', to: 'REL1', label: 'next step', arrows: "to", },
      { id: 'b', from: 'REL1', to: 'REQ1', label: 'prev step', arrows: "to", },
      { id: 'c', from: 'REL1', to: 'AO', label: 'NEXT', arrows: "to", },
      { id: 'd', from: 'AO', to: 'REL1', label: 'PREV', arrows: "to", },
      { id: 'e', from: 'AO', to: 'PA', label: 'NEXT', arrows: "to", },
      { id: 'f', from: 'PA', to: 'AO', label: 'PREV', arrows: "to", },
      { id: 'g', from: 'PA', to: 'REQ1', label: 'PREV', arrows: "to", smooth: { type: "curvedCW" } },
      { id: 'h', from: 'PA', to: 'PEER', label: 'NEXT', arrows: "to", },
      { id: 'i', from: 'PEER', to: 'PA', label: 'PREV', arrows: "to", },
      { id: 'j', from: 'PA', to: 'RMLRO', label: 'NEXT', arrows: "to", },
      { id: 'k', from: 'PA', to: 'IT', label: 'NEXT', arrows: "to", },
      { id: 'l', from: 'IT', to: 'PA', label: 'PREV', arrows: "to", },
      { id: 'm', from: 'PA', to: 'NBS', label: 'NEXT', arrows: "to", },
      { id: 'n', from: 'NBS', to: 'PRISM', label: 'NEXT', arrows: "to", },
      { id: 'o', from: 'PRISM', to: 'REQ2', label: 'NEXT', arrows: "to", },
      { id: 'p', from: 'REQ2', to: 'NBSRO', label: 'NEXT', arrows: "to", },
      { id: 'q', from: 'NBSRO', to: 'ARCHPA', label: 'NEXT', arrows: "to", },
      { id: 'r', from: 'ARCHPA', to: 'NBSRO', label: 'PREV', arrows: "to", },
      { id: 's', from: 'ARCHPA', to: 'PA', label: 'NEXT', arrows: "to", smooth: { type: "curvedCW" } },
      { id: 't', from: 'PA', to: 'ARCHPA', label: 'PREV', arrows: "to,from", smooth: { type: "curvedCW" } }
    ]
    // [
    //   { from: 1, to: 3 },
    //   { from: 1, to: 2 },
    //   { from: 2, to: 4 },
    //   { from: 2, to: 5, arrows: "to" },
    //   { from: 5, to: 2, arrows: "to", dashes: true }
    // ]
  );
  constructor() {
    this.config = { nodes: this.nodes, edges: this.edges };
  }

  ngOnInit(): void {
  }

}
