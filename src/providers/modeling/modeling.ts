import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { LocalProvider } from '../local/local';

@Injectable()
export class ModelingProvider {
	private segment: string = 'Modeling';

	constructor(
		private api: ApiProvider,
		private local: LocalProvider
	) { }

	getModeling(id?: number) {
		let url = this.segment + (id ? '/' + id : '');
		return new Promise((resolve, reject) => {
			this.api.get(url).subscribe(data => resolve(data));
		});
	}

	postModeling(data: any) {
		return new Promise((resolve, reject) => {
			this.api.post(this.segment, data).subscribe(data => resolve(data));
		});
	}

	putModeling(id: number, data: any) {
		return new Promise((resolve, reject) => {
			this.api.put(`${this.segment}/${id}`, data).subscribe(data => resolve(data));
		});
	}

	deleteModeling(id: number) {
		return new Promise((resolve, reject) => {
			this.api.delete(`${this.segment}/${id}`).subscribe(data => resolve(data));
		});
	}

}

