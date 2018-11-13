import { Input, Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { CreatePaymentComponent, CreateBatchComponent } from '../../../components/components';
import { PaymentProvider } from '../../../providers/payment/payment';

@Component({
	selector: 'component-payment-distribution',
  	templateUrl: 'payment-distribution.html',
})
export class PaymentDistributionComponent {
	@Input('clientId') clientId: string;
	@Input('periods') periods: Array<any>;
	@Input('manufacturers') manufacturers: Array<any>;
	public segmentSelected: string = 'pending';
	public period: any = null;
	public manufacturer: any = null;
	public selectedDate: string = new Date().toISOString();
	public loadDisabled = true;
	constructor(
		public modalCtrl: ModalController,
		private paymentProvider: PaymentProvider
	) {
	}

	ionViewDidLoad() {
	}

	public valueSelected($ev){
		this.loadDisabled = (!this.period || !this.manufacturer);
		console.log(this.loadDisabled);
	}

	public loadReport(){
		console.log("load report");
		let data = {
			runId: this.period.RunId,
			pharmaId: this.manufacturer.PharmaId,
			asOfDate: this.selectedDate,
			clientId: this.clientId
		};
		console.log(data);
		this.paymentProvider.getPaymentReleasePendingList(data).then((res) => {
			console.log(res);
		});
	}

	public createPayment() {
		console.log("createPayment");
		let data = {
			param1: "Param1",
			param2: "Param2"
		};
		let createPaymenteModal = this.modalCtrl.create(CreatePaymentComponent, data);
		createPaymenteModal.present();
	}

	public displayReleased() {
		console.log("displayReleased");
	}

	public createBatch() {
		console.log("createBatch");
		let data = {
			param1: "Param1",
			param2: "Param2"
		};
		let createBatchModal = this.modalCtrl.create(CreateBatchComponent, data);
		createBatchModal.present();
	}



}
