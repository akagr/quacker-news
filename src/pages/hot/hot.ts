import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuackerNewsService } from '../../shared/quacker-news.service';

@Component({
  selector: 'page-hot',
  templateUrl: 'hot.html'
})
export class HotPage {

  private stories: Array<number> = [];
  private currentPage: number = 0;
  private pageSize: number = 20;
  private rawStories: Array<number>;

  constructor(
    public navCtrl: NavController,
    public QuackerNewsService: QuackerNewsService
  ) {

  }

  ngOnInit() {
    this.QuackerNewsService.getHot(1).subscribe((data: Array<number>) => {
      this.rawStories = data;
      this.loadMoreStories();
    });
  }

  loadMoreStories(scroll = {complete: () => {}}) {
    setTimeout(() => {
      this.stories = this.stories.concat(
        this.rawStories.slice(this.currentPage, this.currentPage + this.pageSize)
      );
      this.currentPage += this.pageSize;
      scroll.complete();
    }, 1000);
  }
}
