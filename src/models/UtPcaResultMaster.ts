import { UtPcaCalcRsltId } from './UtPcaCalcRsltId';
import { UtPcaResultClientId } from './UtPcaResultClientId';
export class UtPcaResultMaster {
	resultMasterId?: number;
	resultClientId?: number;
	calcRsltId?: number;
	calcRslt?: UtPcaCalcRsltId;
	resultClient?: UtPcaResultClientId;
	constructor(obj: any = {}) {
		this.resultMasterId = obj.resultMasterId;
		this.resultClientId = obj.resultClientId;
		this.calcRsltId = obj.calcRsltId;
		this.calcRslt = new UtPcaCalcRsltId(obj.calcRslt);
		this.resultClient = new UtPcaResultClientId(obj.resultClient);
	}
}
