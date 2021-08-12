import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Network } from 'vis-network';
import { DataSet } from "vis-data"

@Component({
  selector: 'app-plugin-graph',
  templateUrl: './plugin-graph.component.html',
  styleUrls: ['./plugin-graph.component.scss']
})
export class PluginGraphComponent implements AfterViewInit {
  @Input() config: any;
  @ViewChild('network', { static: true }) el?: ElementRef;
  private networkInstance: any;

  ngAfterViewInit() {
    const container = this.el?.nativeElement;
    this.networkInstance = new Network(container, this.config, { physics: false });
  }
}