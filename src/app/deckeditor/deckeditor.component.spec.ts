import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckeditorComponent } from './deckeditor.component';

describe('DeckeditorComponent', () => {
  let component: DeckeditorComponent;
  let fixture: ComponentFixture<DeckeditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeckeditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
