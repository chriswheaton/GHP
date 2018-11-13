import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { LocalProvider } from '../local/local';

@Injectable()
export class PaymentProvider {
	private segment: string = 'Payment';

	constructor(
		private api: ApiProvider,
		private local: LocalProvider
	) { }

	getDropdownValues(id: number){
		return new Promise((resolve) => {
			this.getManufacturers(id).then((manufacturers)=>{
				this.getPeriods(id).then((periods) => {
					resolve({ periods: periods, manufacturers: manufacturers});
				});
			});
		});
	}

	getManufacturers(id: number) {
		let url = `${this.segment}/GetManufacturers/${id}`;
		return new Promise((resolve, reject) => {
			this.api.get(url).subscribe(data => resolve(data));
		});
	}

	getPeriods(id: number) {
		let url = `${this.segment}/GetPeriods/${id}`;
		return new Promise((resolve, reject) => {
			this.api.get(url).subscribe(data => resolve(data));
		});
	}

	getPaymentReleasePendingList(data: any) {
		let url = `${this.segment}/GetPaymentReleasePendingList`;
		return new Promise((resolve, reject) => {
			this.api.post(url, data).subscribe(data => resolve(data));
		});
	}

	getFinInboundDetailByHeaderId(id: number) {
		let url = `${this.segment}/GetFinInboundDetailByHeaderId/${id}`;
		return new Promise((resolve, reject) => {
			this.api.get(url).subscribe(data => resolve(data));
		});
	}

	getPaymentReleaseDetailByReleaseId(id: number) {
		let url = `${this.segment}/GetPaymentReleaseDetailByReleaseId/${id}`;
		return new Promise((resolve, reject) => {
			this.api.get(url).subscribe(data => resolve(data));
		});
	}

	getAllProOptFinInboundHeader() {
		let url = `${this.segment}/GetAllProOptFinInboundHeader/`;
		return new Promise((resolve, reject) => {
			this.api.get(url).subscribe(data => resolve(data));
		});
	}

	getProOptFinInboundDetailProduct(id: number) {
		let url = `${this.segment}/GetProOptFinInboundDetailProduct/${id}`;
		return new Promise((resolve, reject) => {
			this.api.get(url).subscribe(data => resolve(data));
		});
	}

	getAllProOptFinInboundClientSementationByClientGroupId(data: any) {
		let url = `${this.segment}/GetAllProOptFinInboundClientSementationByClientGroupId/`;
		return new Promise((resolve, reject) => {
			this.api.post(url, data).subscribe(data => resolve(data));
		});
	}

	saveProOptFinInboundHeader(data: any) {
		let url = `${this.segment}/SaveProOptFinInboundHeader/`;
		return new Promise((resolve, reject) => {
			this.api.post(url, data).subscribe(data => resolve(data));
		});
	}

	saveProOptFinInboundDetail(data: any) {
		let url = `${this.segment}/SaveProOptFinInboundDetail/`;
		return new Promise((resolve, reject) => {
			this.api.post(url, data).subscribe(data => resolve(data));
		});
	}

	getPayment(id?: number) {
		let url = this.segment + (id ? '/' + id : '');
		return new Promise((resolve, reject) => {
			this.api.get(url).subscribe(data => resolve(data));
		});
	}

	postPayment(data: any) {
		return new Promise((resolve, reject) => {
			this.api.post(this.segment, data).subscribe(data => resolve(data));
		});
	}

	putPayment(id: number, data: any) {
		return new Promise((resolve, reject) => {
			this.api.put(`${this.segment}/${id}`, data).subscribe(data => resolve(data));
		});
	}

	deletePayment(id: number) {
		return new Promise((resolve, reject) => {
			this.api.delete(`${this.segment}/${id}`).subscribe(data => resolve(data));
		});
	}
}
