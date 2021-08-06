import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginGraphRouteComponent } from './plugin-graph-route.component';

describe('PluginGraphRouteComponent', () => {
  let component: PluginGraphRouteComponent;
  let fixture: ComponentFixture<PluginGraphRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluginGraphRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginGraphRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
