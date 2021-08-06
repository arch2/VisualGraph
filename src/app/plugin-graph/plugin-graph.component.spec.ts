import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginGraphComponent } from './plugin-graph.component';

describe('PluginGraphComponent', () => {
  let component: PluginGraphComponent;
  let fixture: ComponentFixture<PluginGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluginGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
