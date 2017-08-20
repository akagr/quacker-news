import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Item } from '../../item.model';

@Component({
  selector: 'story-detail',
  templateUrl: 'story-detail.component.html',
  styles: ['story-detail.component.scss']
})
export class StoryDetail {

  private story: Item = new Item({});

  constructor(private params: NavParams) {
    this.story = this.params.get('story');
  }
}
