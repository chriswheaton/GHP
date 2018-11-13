import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'create-payment',
  templateUrl: 'create-payment.html'
})
export class CreatePaymentComponent {

	constructor(public navParams: NavParams) {
		console.log('Param1', navParams.get('param1'));
		console.log('Param2', navParams.get('param1'));
	}

}
