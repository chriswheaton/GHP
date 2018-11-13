import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-reports',
  templateUrl: 'index.html',
})
export class ReportsIndexPage {
	public segmentSelected: string = 'manufacturer';

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
	}

}
