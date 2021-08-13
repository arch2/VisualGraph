import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { startWith, tap } from 'rxjs/operators';
import { graphConfigs } from './node-configs';

@Component({
  selector: 'app-plugin-graph-route',
  templateUrl: './plugin-graph-route.component.html',
  styleUrls: ['./plugin-graph-route.component.scss']
})
export class PluginGraphRouteComponent implements OnInit {
  configSubject: BehaviorSubject<any>;
  config: any = {};
  graphSelected: FormControl;
  constructor() {
    this.graphSelected = new FormControl('A');
    this.configSubject = new BehaviorSubject<any>(null);
  }
  ngOnInit(): void {
    this.graphSelected.valueChanges.pipe(
      startWith(this.graphSelected.value),
      tap(x => {
        const currentConfig = graphConfigs.find(y => y.configName == x);
        if (currentConfig) {
          this.config = { nodes: currentConfig.nodes, edges: currentConfig.edges };
          this.configSubject.next(this.config)
        }
        else {
          console.error("couldn't find config")
        }
      })
    ).subscribe();
  }
}