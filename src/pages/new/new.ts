import { Component, Injector } from '@angular/core';
import { AbstractStoryPage } from '../abstract-story-page';

@Component({
  selector: 'page-new',
  templateUrl: 'new.html'
})
export class NewPage extends AbstractStoryPage {

  protected newsMethod = 'getNew';

  constructor(
    injector: Injector
  ) {
    super(injector);
  }

  ngOnInit() {
    this.loadStories();
  }
}
