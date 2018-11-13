import { FormularyDetails } from './FormularyDetails';
import { FormularyExclusions } from './FormularyExclusions';
import { FormularyRdlDetails } from './FormularyRdlDetails';
import { FormularyRpuDetails } from './FormularyRpuDetails';
export class FormularyHeader {
	formularyHeaderIdPk?: number;
	formularyHeaderName?: string;
	statusCode?: string;
	lastChangeDateTime?: string;
	lastChangeUser?: string;
	formularyDetails?: Array<FormularyDetails>;
	formularyExclusions?: Array<FormularyExclusions>;
	formularyRdlDetails?: Array<FormularyRdlDetails>;
	formularyRpuDetails?: Array<FormularyRpuDetails>;
	constructor(obj: any = {}) {
		this.formularyHeaderIdPk = obj.formularyHeaderIdPk;
		this.formularyHeaderName = obj.formularyHeaderName;
		this.statusCode = obj.statusCode;
		this.lastChangeDateTime = obj.lastChangeDateTime;
		this.lastChangeUser = obj.lastChangeUser;
		this.formularyDetails = obj.formularyDetails.map(o => new FormularyDetails(o));
		this.formularyExclusions = obj.formularyExclusions.map(o => new FormularyExclusions(o));
		this.formularyRdlDetails = obj.formularyRdlDetails.map(o => new FormularyRdlDetails(o));
		this.formularyRpuDetails = obj.formularyRpuDetails.map(o => new FormularyRpuDetails(o));
	}
}
