import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuackerNewsService } from './quacker-news.service';
import { StoryRow } from './components/story-row.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    QuackerNewsService
  ],
  declarations: [
    StoryRow
  ],
  exports: [
    StoryRow
  ]
})
export class SharedModule {}
