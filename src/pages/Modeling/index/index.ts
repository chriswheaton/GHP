import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-modeling-index',
  templateUrl: 'index.html',
})
export class ModelingPage {
	segmentSelected: string = 'dataset';
	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
	}

}
