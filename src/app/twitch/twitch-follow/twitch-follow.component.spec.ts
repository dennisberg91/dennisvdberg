import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitchFollowComponent } from './twitch-follow.component';

describe('TwitchFollowComponent', () => {
  let component: TwitchFollowComponent;
  let fixture: ComponentFixture<TwitchFollowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitchFollowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitchFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
