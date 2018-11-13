import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-contract',
  templateUrl: 'index.html',
})
export class ContractIndexPage {
	segmentSelected: string = 'management';
	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
	}

}
