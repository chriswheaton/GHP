import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { LocalProvider } from '../local/local';
import { ClientMaster } from '../../models/ClientMaster';

@Injectable()
export class ClientProvider {
	private segment: string = 'Client';

    constructor(
		private api: ApiProvider,
		private local: LocalProvider
    ) {}

    getClientMaster(){
		return new Promise((resolve, reject)=>{
			this.api.get(`${this.segment}/GetClientMaster`).subscribe(data=>resolve(data));
		});
    }

	postVwPlanFileManager(data: any) {
		return new Promise((resolve, reject) => {
			this.api.post(`${this.segment}/VwPlanFileManager`, data).subscribe(data => resolve(data));
		});
	}

	postSegmentationSave(data: any) {
		return new Promise((resolve, reject) => {
			this.api.post(`${this.segment}/SegmentationSave`, data).subscribe(data => resolve(data));
		});
	}

	postClient(data: any) {
		return new Promise((resolve, reject) => {
			this.api.post(`${this.segment}`, data).subscribe(data => resolve(data));
		});
	}

	putClient(id: number, data: any) {
		return new Promise((resolve, reject) => {
			this.api.put(`${this.segment}/${id}`, data).subscribe(data => resolve(data));
		});
	}

	deleteClient(id: number,) {
		return new Promise((resolve, reject) => {
			this.api.delete(`${this.segment}/${id}`).subscribe(data => resolve(data));
		});
	}
}
