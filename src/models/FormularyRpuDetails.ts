import { FormularyHeader } from './FormularyHeader';
export class FormularyRpuDetails {
	formularyRpuIdPk?: number;
	formularyHeaderIdFk?: number;
	ndc?: string;
	flexibleRate?: string;
	rpuRate?: number;
	beginDate?: string;
	endDate?: string;
	lastChangeUser?: string;
	lastChangeTimestamp?: string;
	formularyHeaderIdFkNavigation?: FormularyHeader;
	constructor(obj: any = {}) {
		this.formularyRpuIdPk = obj.formularyRpuIdPk;
		this.formularyHeaderIdFk = obj.formularyHeaderIdFk;
		this.ndc = obj.ndc;
		this.flexibleRate = obj.flexibleRate;
		this.rpuRate = obj.rpuRate;
		this.beginDate = obj.beginDate;
		this.endDate = obj.endDate;
		this.lastChangeUser = obj.lastChangeUser;
		this.lastChangeTimestamp = obj.lastChangeTimestamp;
		this.formularyHeaderIdFkNavigation = new FormularyHeader(obj.formularyHeaderIdFkNavigation);
	}
}
