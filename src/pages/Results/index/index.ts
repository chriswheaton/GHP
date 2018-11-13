import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-results-landing',
  templateUrl: 'index.html',
})
export class ResultsIndexPage {
	public segmentSelected: string = 'calculations';

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
	}

}
