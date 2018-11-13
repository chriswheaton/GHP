import { UtPcaCalcId } from './UtPcaCalcId';
export class UtPcaCalcTypeId {
	calcTypeId?: number;
	calcTypeNm?: string;
	utPcaCalcId?: Array<number>;
	constructor(obj: any = {}) {
		this.calcTypeId = obj.calcTypeId;
		this.calcTypeNm = obj.calcTypeNm;
		this.utPcaCalcId = obj.utPcaCalcId.map(o => new UtPcaCalcId(o));
	}
}
