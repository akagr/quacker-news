import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HotPage } from '../hot/hot';
import { NewPage } from '../new/new';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = HotPage;
  tab2Root: any = NewPage;
  constructor(public navCtrl: NavController) {
  }
}
