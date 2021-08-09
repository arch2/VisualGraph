import { Component, OnInit } from '@angular/core';
import { ClusterNode, Edge, Node } from '@swimlane/ngx-graph';

@Component({
  selector: 'app-plugin-graph-route',
  templateUrl: './plugin-graph-route.component.html',
  styleUrls: ['./plugin-graph-route.component.scss']
})
export class PluginGraphRouteComponent {
  nodes: Node[];
  clusters: ClusterNode[] = [];
  links: Edge[];
  constructor() {
    this.nodes =
      [
        {
          id: 'REQ1',
          label: 'REQ 1'
        },
        {
          id: 'REL1',
          label: 'REL'
        },
        {
          id: 'AO',
          label: 'AO'
        },
        {
          id: 'PA',
          label: 'PA'
        },
        {
          id: 'PEER',
          label: 'PEER',
        },
        {
          id: 'IT',
          label: 'IT',
        },
        {
          id: 'RMLRO',
          label: 'RML RO',
        },
        {
          id: 'NBS',
          label: 'NBS',
        },
        {
          id: 'PRISM',
          label: 'PRISM',
        },
        {
          id: 'REQ2',
          label: 'REQ 2',
        },
        {
          id: 'NBSRO',
          label: 'NBS RO',
        },
        {
          id: 'ARCHPA',
          label: 'ARCH PA',
        }
      ];
    this.links =
      [
        {
          id: 'a',
          source: 'REQ1',
          target: 'REL1',
          label: 'next step'
        },
        {
          id: 'b',
          source: 'REL1',
          target: 'REQ1',
          label: 'prev step'
        },
        {
          id: 'c',
          source: 'REL1',
          target: 'AO',
          label: 'NEXT'
        },
        {
          id: 'd',
          source: 'AO',
          target: 'REL1',
          label: 'PREV'
        },
        {
          id: 'e',
          source: 'AO',
          target: 'PA',
          label: 'NEXT'
        },
        {
          id: 'f',
          source: 'PA',
          target: 'AO',
          label: 'PREV'
        },
        {
          id: 'g',
          source: 'PA',
          target: 'REQ1',
          label: 'PREV'
        },
        {
          id: 'h',
          source: 'PA',
          target: 'PEER',
          label: 'NEXT'
        },
        {
          id: 'i',
          source: 'PEER',
          target: 'PA',
          label: 'PREV'
        },
        {
          id: 'j',
          source: 'PA',
          target: 'RMLRO',
          label: 'NEXT'
        },
        {
          id: 'k',
          source: 'PA',
          target: 'IT',
          label: 'NEXT'
        },
        {
          id: 'l',
          source: 'IT',
          target: 'PA',
          label: 'PREV'
        },
        {
          id: 'm',
          source: 'PA',
          target: 'NBS',
          label: 'NEXT'
        },
        {
          id: 'n',
          source: 'NBS',
          target: 'PRISM',
          label: 'NEXT'
        },
        {
          id: 'o',
          source: 'PRISM',
          target: 'REQ2',
          label: 'NEXT'
        },
        {
          id: 'p',
          source: 'REQ2',
          target: 'NBSRO',
          label: 'NEXT'
        },
        {
          id: 'q',
          source: 'NBSRO',
          target: 'ARCHPA',
          label: 'NEXT'
        },
        {
          id: 'r',
          source: 'ARCHPA',
          target: 'NBSRO',
          label: 'PREV'
        },
        {
          id: 's',
          source: 'ARCHPA',
          target: 'PA',
          label: 'NEXT'
        },
        {
          id: 't',
          source: 'PA',
          target: 'ARCHPA',
          label: 'PREV'
        }
      ];
  }

}
