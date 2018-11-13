import { FormularyHeader } from './FormularyHeader';
export class FormularyRdlDetails {
	formularyRdlIdPk?: number;
	formularyHeaderIdFk?: number;
	ndc?: string;
	beginDate?: string;
	endDate?: string;
	rebatable?: string;
	lastChangeUser?: string;
	lastChangeTimestamp?: string;
	formularyHeaderIdFkNavigation?: FormularyHeader;
	constructor(obj: any = {}) {
		this.formularyRdlIdPk = obj.formularyRdlIdPk;
		this.formularyHeaderIdFk = obj.formularyHeaderIdFk;
		this.ndc = obj.ndc;
		this.beginDate = obj.beginDate;
		this.endDate = obj.endDate;
		this.rebatable = obj.rebatable;
		this.lastChangeUser = obj.lastChangeUser;
		this.lastChangeTimestamp = obj.lastChangeTimestamp;
		this.formularyHeaderIdFkNavigation = new FormularyHeader(obj.formularyHeaderIdFkNavigation);
	}
}
