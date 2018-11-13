import { Input, Component } from '@angular/core';

@Component({
	selector: 'component-payment-distribution',
  	templateUrl: 'payment-distribution.html',
})
export class PaymentDistributionComponent {
	@Input('periods') periods: any;
	@Input('manufacturers') manufacturers: any;
	public segmentSelected: string = 'pending';
	public period: Array<any>;
	public manufacturer: Array<any>;
	public selectedDate: any;

	constructor() {
	}

	ionViewDidLoad() {
	}

}
