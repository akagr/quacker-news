import { IonicModule } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { MyApp } from '../../../app/app.component';
import { StoryRow } from './story-row.component';
import { QuackerNewsService } from '../../quacker-news.service';

class QuackerNewsServiceStub {
  constructor() {}
  getItem(id: number) {
    return Observable.create(ob => {
      ob.next({id});
      ob.complete();
    });
  }
}

@Component({
  template: `
    <story-row  [storyId]="storyId"></story-row>`
})
class TestHostComponent {
  storyId = 123;
  @ViewChild(StoryRow) storyRow: StoryRow;
}

describe('StoryRow Component', () => {

  let comp:    TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(MyApp)],
      declarations: [ MyApp, TestHostComponent, StoryRow ], // declare the test component
      providers: [
        {provide: QuackerNewsService, useValue: new QuackerNewsServiceStub()},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    comp = fixture.componentInstance;
  }));

  it('should display original title', () => {
    fixture.detectChanges();
    expect(comp.storyRow.storyId).toBe(123);
  });
});
