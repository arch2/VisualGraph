import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Network } from 'vis-network';

@Component({
  selector: 'app-plugin-graph',
  templateUrl: './plugin-graph.component.html',
  styleUrls: ['./plugin-graph.component.scss']
})
export class PluginGraphComponent implements AfterViewInit {
  @Input() config: any;
  @ViewChild('network', { static: true }) el?: ElementRef;
  private networkInstance?: Network;

  ngAfterViewInit() {
    const container = this.el?.nativeElement;
    this.networkInstance = new Network(container, this.config, { physics: false,clickToUse:false });    
  }
}