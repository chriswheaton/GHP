import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-processing',
  templateUrl: 'index.html',
})
export class ProcessingIndexPage {
	public segmentSelected: string = 'management';
	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
	}

}
