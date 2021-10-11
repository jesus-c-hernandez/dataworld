import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimenComponent } from './crimen.component';

describe('CrimenComponent', () => {
  let component: CrimenComponent;
  let fixture: ComponentFixture<CrimenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrimenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrimenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
