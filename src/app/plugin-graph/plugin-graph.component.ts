import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Network } from 'vis-network';
import { startWith, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-plugin-graph',
  templateUrl: './plugin-graph.component.html',
  styleUrls: ['./plugin-graph.component.scss']
})
export class PluginGraphComponent implements AfterViewInit, OnDestroy {
  @Input() configSubject?: BehaviorSubject<any>;
  @ViewChild('network', { static: true }) el?: ElementRef;
  private networkInstance?: Network;
  private unSubscribe: Subject<void>;
  constructor() {
    this.unSubscribe = new Subject<void>();
  }
  ngAfterViewInit() {
    this.configSubject?.pipe(
      takeUntil(this.unSubscribe),
      startWith(this.configSubject.value),
      tap(x => this.renderNetwork(x)),
    ).subscribe();
  }
  ngOnDestroy(): void {
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }
  renderNetwork(config: any) {
    if (config) {
      if (this.networkInstance) {
        this.networkInstance.setData(config);
        this.networkInstance.redraw();
      }
      else {
        const container = this.el?.nativeElement;
        this.networkInstance = new Network(container, config, { physics: false, clickToUse: false, interaction: { zoomView: false, dragView: false, hover: true } });
      }
    }
    else {
      console.error("No config passed to render network")
    }
  }
}