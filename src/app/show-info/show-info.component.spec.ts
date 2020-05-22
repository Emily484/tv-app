import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowInfoComponent } from './show-info.component';
import { TvshowService } from 'src/app/show-info-service/tvshow.service';
import { TvshowServiceFake } from 'src/app/show-info-service/tvshow.service.fake';

describe('ShowInfoComponent', () => {
  let component: ShowInfoComponent;
  let fixture: ComponentFixture<ShowInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowInfoComponent ],
      providers:[
       {provide: TvshowService, useClass: TvshowServiceFake}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
