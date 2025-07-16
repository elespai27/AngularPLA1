import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalResourceForm } from './digital-resource-form';

describe('DigitalResourceForm', () => {
  let component: DigitalResourceForm;
  let fixture: ComponentFixture<DigitalResourceForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalResourceForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalResourceForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
