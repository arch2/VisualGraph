import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-graph-route',
  templateUrl: './graph-route.component.html',
  styleUrls: ['./graph-route.component.scss']
})
export class GraphRouteComponent implements OnInit {
  nodeFG: FormGroup;
  constructor(private fb: FormBuilder) {
    this.nodeFG = this.fb.group({
      nodes: this.fb.array(
        [
          this.fb.group({ name: 'REQ1', active: 0 }),
          this.fb.group({ name: 'REL1', active: 0 }),
          this.fb.group({ name: 'AO', active: 0 }),
          this.fb.group({ name: 'PA', active: 0 }),
          this.fb.group({ name: 'PEER', active: 0 }),
          this.fb.group({ name: 'IT', active: 0 }),
          this.fb.group({ name: 'RML RO', active: 0 }),
          this.fb.group({ name: 'NBS', active: 1 }),
          this.fb.group({ name: 'PRISM', active: 0 }),
          this.fb.group({ name: 'REQ2', active: 0 }),
          this.fb.group({ name: 'NBS RO', active: 0 }),
          this.fb.group({ name: 'ARCH PA', active: 0 }),
        ]
      )
    });
  }

  ngOnInit(): void {
  }
  get nodes(): FormArray {
    return this.nodeFG.get('nodes') as FormArray;
  }
}
