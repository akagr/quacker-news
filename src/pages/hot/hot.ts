import { Component, Injector } from '@angular/core';
import { AbstractStoryPage } from '../abstract-story-page';

@Component({
  selector: 'page-hot',
  templateUrl: 'hot.html'
})
export class HotPage extends AbstractStoryPage {

  protected newsMethod = 'getHot';

  constructor(
    injector: Injector
  ) {
    super(injector);
  }

  ngOnInit() {
    this.loadStories();
  }
}
