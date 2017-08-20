import { Component, Input } from '@angular/core';
import { QuackerNewsService } from '../../quacker-news.service';
import { Item } from '../../item.model';

@Component({
  selector: 'story-comment',
  templateUrl: 'story-comment.component.html',
  styles: ['story-comment.component.scss']
})
export class StoryComment {
  @Input() itemId: number;

  private item: Item = new Item({});

  constructor(private QuackerNewsService: QuackerNewsService) {
  }

  ngOnInit() {
    this.QuackerNewsService.getItem(this.itemId).subscribe((item: Item) => {
      this.item = item;
    });
  }
}
