import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
declare var vis:any;

@Component({
  selector: 'app-plugin-graph',
  templateUrl: './plugin-graph.component.html',
  styleUrls: ['./plugin-graph.component.scss']
})
export class PluginGraphComponent implements OnInit {
  @Input() config: any;
  @ViewChild("siteConfigNetwork", { static: true }) networkContainer!: ElementRef;
  public network: any;

  constructor() { }

  ngOnInit() {
    var treeData = this.getTreeData();
    this.loadVisTree(treeData);     // RENDER STANDARD NODES WITH TEXT LABEL
  }

  loadVisTree(treedata: any) {
    var options = {
      interaction: {
        hover: true,
      },
      manipulation: {
        enabled: true
      }
    };
    var container = this.networkContainer.nativeElement;
    this.network = new vis.Network(container, treedata, options);

    var that = this;
    this.network.on("hoverNode", function (params: any) {
      console.log('hoverNode Event:', params);
    });
    this.network.on("blurNode", function (params: any) {
      console.log('blurNode event:', params);
    });
  }

  getTreeData() {
    var nodes = [
      { id: 1, label: 'Node 1', title: 'I am node 1!' },
      { id: 2, label: 'Node 2', title: 'I am node 2!' },
      { id: 3, label: 'Node 3' },
      { id: 4, label: 'Node 4' },
      { id: 5, label: 'Node 5' }
    ];

    // create an array with edges
    var edges = [
      { from: 1, to: 3 },
      { from: 1, to: 2 },
      { from: 2, to: 4 },
      { from: 2, to: 5 }
    ];
    var treeData = {
      nodes: nodes,
      edges: edges
    };
    return treeData;
  }
}