import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';

@Injectable()
export class FormularyProvider {
	private segment: string = 'Formulary';
	private rdlSegment: string = 'FormularyRdlRpu';

	constructor(private api: ApiProvider) {}

	getFormularyDesignByClientId(id: number) {
		return new Promise((resolve, reject) => {
			this.api.get(`${this.segment}/GetFormularyDesignByClientId/${id}`).subscribe(data => resolve(data));
		});
	}

	getSubSegmentationByHpfrmlyId(id: number) {
		return new Promise((resolve, reject) => {
			this.api.get(`${this.segment}/GetSubSegmentationByHpfrmlyId/${id}`).subscribe(data => resolve(data));
		});
	}

	getAllFormularyDesign() {
		return new Promise((resolve, reject) => {
			this.api.get(`${this.segment}/GetAllFormularyDesign`).subscribe(data => resolve(data));
		});
	}

	getFormularyRdlByFormularyIdPk(id: number) {
		return new Promise((resolve, reject) => {
			this.api.get(`${this.rdlSegment}/GetFormularyRdlByFormularyIdPk/${id}`).subscribe(data => resolve(data));
		});
	}

	getFormularyRdlRpu(id: number) {
		return new Promise((resolve, reject) => {
			this.api.get(`${this.rdlSegment}/${id}`).subscribe(data => resolve(data));
		});
	}

	postFormularyRdlRpu(data: any) {
		return new Promise((resolve, reject) => {
			this.api.post(`${this.rdlSegment}`, data).subscribe(data => resolve(data));
		});
	}
}
