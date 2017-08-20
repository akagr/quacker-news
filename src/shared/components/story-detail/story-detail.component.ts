import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { Item } from '../../item.model';

@Component({
  selector: 'story-detail',
  templateUrl: 'story-detail.component.html',
  styles: ['story-detail.component.scss']
})
export class StoryDetail {

  private story: Item = new Item({});

  constructor(
    private params: NavParams,
    private iab: InAppBrowser
  ) {
    this.story = this.params.get('story');
  }

  openUrl() {
    this.iab.create(this.story.url);
  }
}
