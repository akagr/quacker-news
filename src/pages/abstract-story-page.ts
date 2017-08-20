import { QuackerNewsService } from '../shared/quacker-news.service';

export class AbstractStoryPage {

  protected stories: Array<number> = [];
  protected currentPage: number = 0;
  protected pageSize: number = 20;
  protected rawStories: Array<number>;
  protected newsMethod: string;
  private QuackerNewsService: QuackerNewsService;

  constructor(injector) {
    this.QuackerNewsService = injector.get(QuackerNewsService);
  }

  loadStories() {
    this.QuackerNewsService[this.newsMethod]().subscribe((data: Array<number>) => {
      this.rawStories = data;
      this.loadMoreStories();
    })
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
