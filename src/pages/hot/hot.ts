import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuackerNewsService } from '../../shared/quacker-news.service';

@Component({
  selector: 'page-hot',
  templateUrl: 'hot.html'
})
export class HotPage {

  private stories: Array<number>;

  constructor(
    public navCtrl: NavController,
    public QuackerNewsService: QuackerNewsService
  ) {

  }

  ngOnInit() {
    this.QuackerNewsService.getHot(1).subscribe((data: Array<number>) => {
      this.stories = data.slice(0, 15);
    });
  }
}
