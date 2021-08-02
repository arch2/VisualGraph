import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphRouteComponent } from './graph-route.component';

describe('GraphRouteComponent', () => {
  let component: GraphRouteComponent;
  let fixture: ComponentFixture<GraphRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
