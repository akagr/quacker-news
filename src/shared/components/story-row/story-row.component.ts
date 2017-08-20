import { Component, Input } from '@angular/core';
import { QuackerNewsService } from '../../quacker-news.service';

import { Item } from '../../item.model';
import { StoryDetail } from '../story-detail/story-detail.component';

@Component({
  selector: 'story-row',
  templateUrl: 'story-row.component.html',
  styles: ['./story-row.component.scss']
})
export class StoryRow {

  @Input() storyId: number;

  private story: Item = new Item({});
  private storyDetails: any;

  constructor(
    private QuackerNewsService: QuackerNewsService
  ) {
    this.storyDetails = StoryDetail;
  }

  ngOnInit() {
    this.QuackerNewsService.getItem(this.storyId).subscribe((item: Item) => {
      this.story = item;
    });
  }
}
