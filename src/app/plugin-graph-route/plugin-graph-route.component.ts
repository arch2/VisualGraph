import { Component, OnInit } from '@angular/core';
import { DataSet } from 'vis-data';
import { Edge, Node } from 'vis-network';

@Component({
  selector: 'app-plugin-graph-route',
  templateUrl: './plugin-graph-route.component.html',
  styleUrls: ['./plugin-graph-route.component.scss']
})
export class PluginGraphRouteComponent implements OnInit {
  config: any = {};

  private nodes = new DataSet<Node>(
    [
      { id: 'REQ1', label: 'REQ 1', x: 0, y: 0, fixed: true },
      { id: 'REL1', label: 'REL', x: 150, y: 0, fixed: true },
      { id: 'AO', label: 'AO', x: 300, y: 0, fixed: true },
      { id: 'PA', label: 'PA', x: 450, y: 0, fixed: true, color: "red" },
      { id: 'PEER', label: 'PEER', x: 450, y: -100, fixed: true },
      { id: 'IT', label: 'IT', x: 300, y: 100, fixed: true },
      { id: 'RMLRO', label: 'RML RO', x: 450, y: 100, fixed: true },
      { id: 'NBS', label: 'NBS', x: 600, y: 0, fixed: true },
      { id: 'PRISM', label: 'PRISM', x: 750, y: 0, fixed: true },
      { id: 'REQ2', label: 'REQ 2', x: 900, y: 0, fixed: true },
      { id: 'NBSRO', label: 'NBS RO', x: 1050, y: 0, fixed: true },
      { id: 'ARCHPA', label: 'ARCH PA', x: 1200, y: 0, fixed: true }
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
      { id: 'a', from: 'REQ1', to: 'REL1', arrows: "to", },
      { id: 'b', from: 'REL1', to: 'REQ1', arrows: "to", },
      { id: 'c', from: 'REL1', to: 'AO', arrows: "to", dashes: true },
      { id: 'd', from: 'AO', to: 'REL1', arrows: "to", dashes: true },
      { id: 'e', from: 'AO', to: 'PA', arrows: "to", dashes: true },
      { id: 'f', from: 'PA', to: 'AO', arrows: "to", dashes: true },
      { id: 'g', from: 'PA', to: 'REQ1', arrows: "to", smooth: { type: "curvedCW", roundness: 0.2 } },
      { id: 'h', from: 'PA', to: 'PEER', arrows: "to", },
      { id: 'i', from: 'PEER', to: 'PA', arrows: "to", },
      { id: 'j', from: 'PA', to: 'RMLRO', arrows: "to", },
      { id: 'k', from: 'PA', to: 'IT', arrows: "to", },
      { id: 'l', from: 'IT', to: 'PA', arrows: "to", },
      { id: 'm', from: 'PA', to: 'NBS', arrows: "to", },
      { id: 'n', from: 'NBS', to: 'PRISM', arrows: "to", },
      { id: 'o', from: 'PRISM', to: 'REQ2', arrows: "to", },
      { id: 'p', from: 'REQ2', to: 'NBSRO', arrows: "to", },
      { id: 'q', from: 'NBSRO', to: 'ARCHPA', arrows: "to", },
      { id: 'r', from: 'ARCHPA', to: 'NBSRO', arrows: "to", },
      { id: 's', from: 'ARCHPA', to: 'PA', arrows: "to", smooth: { type: "curvedCW", roundness: 0.2 } },
      { id: 't', from: 'PA', to: 'ARCHPA', arrows: "to,from", smooth: { type: "curvedCW", roundness: 0.2 } }
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
