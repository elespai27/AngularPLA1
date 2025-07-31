import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalResourceList } from './digital-resource-list';

describe('DigitalResourceList', () => {
  let component: DigitalResourceList;
  let fixture: ComponentFixture<DigitalResourceList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalResourceList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalResourceList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
