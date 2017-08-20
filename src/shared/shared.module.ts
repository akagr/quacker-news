import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';

import { QuackerNewsService } from './quacker-news.service';
import { StoryRow } from './components/story-row/story-row.component';
import { StoryDetail } from './components/story-detail/story-detail.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  providers: [
    QuackerNewsService
  ],
  entryComponents: [
    StoryDetail
  ],
  declarations: [
    StoryRow,
    StoryDetail
  ],
  exports: [
    StoryRow,
    StoryDetail
  ]
})
export class SharedModule {}
