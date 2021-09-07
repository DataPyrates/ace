import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddStartWarpingProductionPage } from './add-start-warping-production.page';

describe('AddStartWarpingProductionPage', () => {
  let component: AddStartWarpingProductionPage;
  let fixture: ComponentFixture<AddStartWarpingProductionPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStartWarpingProductionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddStartWarpingProductionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
