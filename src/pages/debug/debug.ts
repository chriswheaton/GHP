import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ClientProvider } from '../../providers/client/client';
import { ContractProvider } from '../../providers/contract/contract';
import { FormularyProvider } from '../../providers/formulary/formulary';
import { ModelingProvider } from '../../providers/modeling/modeling';
import { PaymentProvider } from '../../providers/payment/payment';
import { UserProvider } from '../../providers/user/user';

@Component({
	selector: 'page-debug',
	templateUrl: 'debug.html',
})
export class DebugPage {
	public ContractByClientId: number;
	public FormularyDesignByClientId: number;
	public SubSegmentationByHpfrmlyId: number;
	public FormularyRdlByFormularyIdPk: number;
	public FormularyRdlRpu: number;
	public ModelingID: number = 1;
	public PaymentInboundID: number = 1;
	public PaymentReleaseID: number = 1;
	public PaymentInboundDetailProductID: number = 1;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private clientProvider: ClientProvider,
		private contractProvider: ContractProvider,
		private formularyProvider: FormularyProvider,
		private modelingProvider: ModelingProvider,
		private paymentProvider: PaymentProvider,
		private userProvider: UserProvider
	) {
		this.ContractByClientId = 1;
		this.FormularyDesignByClientId = 1;
		this.SubSegmentationByHpfrmlyId = 3;
		this.FormularyRdlByFormularyIdPk = 1;
		this.FormularyRdlRpu = 3;
  	}

	ionViewDidLoad() {}

	//#region Client
	getClientMaster(){ //Client Setup -> Name DD
		this.clientProvider.getClientMaster().then((data: Array<any>) => {
			console.log('getClientMaster', data);
		});
	}

	postVwPlanFileManager(){ //What View
		let data = {};
		this.clientProvider.postVwPlanFileManager(data).then((data: Array<any>) => {
			console.log('getClientMaster', data);
		});
	}

	postSegmentationSave(){ //CLient Setup -> Client Segmentation -> Save
		let data = {};
		this.clientProvider.postSegmentationSave(data).then((data: Array<any>) => {
			console.log('getClientMaster', data);
		});
	}

	postClient(){
		let data = {};
		this.clientProvider.postClient(data).then((data: Array<any>) => {
			console.log('getClientMaster', data);
		});
	}

	putClient(){
		let data = {};
		let id = 1;
		this.clientProvider.putClient(id, data).then((data: Array<any>) => {
			console.log('getClientMaster', data);
		});
	}

	deleteClient(){
		let id = 1;
		this.clientProvider.deleteClient(id).then((data: Array<any>) => {
			console.log('getClientMaster', data);
		});
	}

	//#endregion

	//#region Contract
	getContractByClientId(){
		this.contractProvider.getContractByClientId(this.ContractByClientId).then((data: any) => {
			console.log('getContractByClientId', data);
			this.ContractByClientId++;
		});
	}
	//#endregion

	//#region Formulary
	getFormularyDesignByClientId(){
		this.formularyProvider.getFormularyDesignByClientId(this.FormularyDesignByClientId).then((data: any) => {
			console.log('getFormularyDesignByClientId', data);
			this.FormularyDesignByClientId++;
		});
	}

	getSubSegmentationByHpfrmlyId(){
		this.formularyProvider.getSubSegmentationByHpfrmlyId(this.SubSegmentationByHpfrmlyId).then((data: any) => {
			console.log('getSubSegmentationByHpfrmlyId', data);
			this.SubSegmentationByHpfrmlyId++;
		});
	}

	getAllFormularyDesign(){
		this.formularyProvider.getAllFormularyDesign().then((data: any) => {
			console.log('getAllFormularyDesign', data);
		});
	}
	//#endregion

	//#region FormularyRdlRpu
	getFormularyRdlByFormularyIdPk(){
		this.formularyProvider.getFormularyRdlByFormularyIdPk(this.FormularyRdlByFormularyIdPk).then((data: any) => {
			console.log('getFormularyRdlByFormularyIdPk', data);
			this.FormularyRdlByFormularyIdPk++;
		});
	}

	getFormularyRdlRpu(){
		this.formularyProvider.getFormularyRdlRpu(this.FormularyRdlRpu).then((data: any) => {
			console.log('getFormularyRdlRpu', data);
			this.FormularyRdlRpu++;
		});
	}

	postFormularyRdlRpu(){
		let data = {};
		this.formularyProvider.postFormularyRdlRpu(data).then((data: any) => {
			console.log('postFormularyRdlRpu', data);
		});
	}
	//#endregion

	//#region Modeling
	getModeling(id?: number) {
		console.log(this.ModelingID);
		this.modelingProvider.getModeling(id).then((data: any) => {
			console.log('getModeling', data);
			this.ModelingID = this.ModelingID++;// (id ? this.Modeling++ : this.Modeling);
		});
	}

	postModeling(){
		let data = {};
		this.modelingProvider.postModeling(data).then((data: any) => {
			console.log('postModeling', data);
		});
	}

	putModeling() {
		let data = {};
		let id = 1;
		this.modelingProvider.putModeling(id, data).then((data: any) => {
			console.log('putModeling', data);
		});
	}

	deleteModeling(id?: number) {
		this.modelingProvider.deleteModeling(id).then((data: any) => {
			console.log('deleteModeling', data);
		});
	}

	//#endregion

	//#region Payment

	getFinInboundDetailByHeaderId(id: number) {
		this.paymentProvider.getFinInboundDetailByHeaderId(id).then((data: any) => {
			console.log('getFinInboundDetailByHeaderId', data);
			this.PaymentInboundID++;
		});
	}

	getPaymentReleaseDetailByReleaseId(id: number) {
		this.paymentProvider.getPaymentReleaseDetailByReleaseId(id).then((data: any) => {
			console.log('getFinInboundDetailByHeaderId', data);
			id ? this.PaymentReleaseID++ : null;
		});
	}

	getAllProOptFinInboundHeader() {
		this.paymentProvider.getAllProOptFinInboundHeader().then((data: any) => {
			console.log('getAllProOptFinInboundHeader', data);
		});
	}

	getProOptFinInboundDetailProduct(id: number) {
		this.paymentProvider.getProOptFinInboundDetailProduct(id).then((data: any) => {
			console.log('getFinInboundDetailByHeaderId', data);
			this.PaymentInboundDetailProductID++;
		});
	}

	getAllProOptFinInboundClientSementationByClientGroupId() {
		let data = {
			"inboundDetailId": 0,
			"hpclntGrpId": 0
		};
		this.paymentProvider.getAllProOptFinInboundClientSementationByClientGroupId(data).then(data => {
			console.log('getAllProOptFinInboundClientSementationByClientGroupId', data);
		});
	}

	saveProOptFinInboundHeader() {
		let data = {
			"inboundHeaderId": 0,
			"inboundHeaderName": "string",
			"inboundHeaderPaymentDate": "2018-10-12T00:29:46.301Z",
			"pharmaId": 0,
			"note": "string",
			"deletedFlag": 0,
			"createDate": "2018-10-12T00:29:46.301Z",
			"updateDate": "2018-10-12T00:29:46.301Z",
			"inboundTypeId": 0,
			"openClosedFlag": true,
			"paymentAmount": 0
		};
		this.paymentProvider.saveProOptFinInboundHeader(data).then(data => {
			console.log('saveProOptFinInboundHeader', data);
		});
	}

	saveProOptFinInboundDetail() {
		let data = {
			"inboundHeaderId": 0,
			"inboundDetailId": 0,
			"inboundDetailDescription": "string",
			"inboundDetailAmount": 0,
			"inboundDetailType": 0,
			"note": "string",
			"deletedFlag": 0,
			"receiptAllocFlag": 0,
			"createDate": "2018-10-12T00:30:01.259Z",
			"updateDate": "2018-10-12T00:30:01.259Z",
			"runId": 0,
			"inboundDetailPaymentDate": "2018-10-12T00:30:01.259Z",
			"openClosedFlag": true,
			"calcRateCatId": 0
		};
		this.paymentProvider.saveProOptFinInboundDetail(data).then(data => {
			console.log('saveProOptFinInboundDetail', data);
		});
	}


	getPayment(id?: number){
		this.paymentProvider.getPayment(id).then((data: any) => {
			console.log('getPayment', data);
		});
	}

	postPayment(id?: number){
		let data = {};
		this.paymentProvider.postPayment(data).then((data: any) => {
			console.log('postPayment', data);
		});
	}

	putPayment(){
		let data = {};
		let id = 1;
		this.paymentProvider.putPayment(id, data).then((data: any) => {
			console.log('putPayment', data);
		});
	}

	deletePayment(id?: number) {
		this.paymentProvider.deletePayment(id).then((data: any) => {
			console.log('deletePayment', data);
		});
	}

	//#endregion

	//#region User
	authenticate(){
		let credentials = {
			email: "chris.horsefield@fullstacktechnologies.com",
			password: "12QWasxc!1"
		}
		this.userProvider.authenticate(credentials).then((data: any) => {
			console.log('authenticate', data);
		});
	}

	getUserIsAlive(){
		this.userProvider.getUserIsAlive().then((data: any) => {
			console.log('getUserIsAlive', data);
		});
	}

	getAllUsers(){
		this.userProvider.getAllUsers().then((data: any) => {
			console.log('getAllUsers', data);
		});
	}

	postGetById(){
		let data = {};
		this.userProvider.postGetById(data).then((data: any) => {
			console.log('postGetById', data);
		});
	}

	postGetByIds(){
		let data = {};
		this.userProvider.postGetByIds(data).then((data: any) => {
			console.log('postGetByIds', data);
		});
	}
	//#endregion


}
