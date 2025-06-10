import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyAboutComponent } from './body-about.component';

describe('BodyAboutComponent', () => {
  let component: BodyAboutComponent;
  let fixture: ComponentFixture<BodyAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BodyAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
