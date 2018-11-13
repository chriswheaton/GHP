import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PaymentProvider } from '../../../providers/payment/payment';

@Component({
  selector: 'page-payments-index',
  templateUrl: 'index.html',
})
export class PaymentsIndexPage {
	public segmentSelected: string = 'paymentDistribution';
	public manufacturers: any;
	public periods: any;
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private paymentProvider: PaymentProvider
	) {
		let clientId = 1; // Will need to get this value from logged in user obj.
		this.paymentProvider.getDropdownValues(clientId).then((values: any) => {
			this.manufacturers = values.manufacturers;
			this.periods = values.periods;
		});
	}

	ionViewDidLoad() {
	}

}
