import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';

@Injectable()
export class ContractProvider {
	private segment: string = 'Contract';

	constructor(
		private api: ApiProvider
	) {}

	getContractByClientId(id: number){
		return new Promise((resolve, reject) => {
			this.api.get(`${this.segment}/GetContractByClientId/${id}`).subscribe(data => resolve(data));
		});
	}
}
