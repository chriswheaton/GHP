import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ClientProvider } from '../../../providers/client/client';
import { FormularyProvider } from '../../../providers/formulary/formulary';

@Component({
	selector: 'page-client-index',
	templateUrl: 'index.html',
})
export class ClientIndexPage {
  	public segmentSelected: string = 'segmentation';
  	public clientMaster: Array<any> = [];
  	public selectedClient: any;
	public FormularyDesigns: Array<any> = [];

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private clientProvider: ClientProvider,
		private formularyProvider: FormularyProvider
	) {
		//console.log('CLient Setup Constructor')
	}

	ionViewDidEnter() {
		console.log('ionViewDidLoad ClientSetupPage');
		this.clientProvider.getClientMaster().then((data: Array<any>) => {
			console.log('getClientMaster',data);
			this.clientMaster = data;
		});

		this.formularyProvider.getAllFormularyDesign().then((data: Array<any>) => {
			this.FormularyDesigns = data;
			console.log('FormularyDesigns', data);
		});
	}

	// ionViewDidLoad() {
	// 	//console.log('ionViewDidLoad ClientSetupPage');
	// 	this.clientProvider.getClientMaster().then((data: Array<any>)=>{
	// 		console.log(data);
	// 		this.clientMaster = data;
	// 	});
	// }


	clientSelected(client: any){
		console.log(client);
		console.log(client.clnt_master_id_pk);
		this.formularyProvider.getFormularyDesignByClientId(client.clnt_master_id_pk).then((data: any) => {
			console.log(data);
		});
	}

}
