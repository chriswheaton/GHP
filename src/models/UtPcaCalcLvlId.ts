import { UtPcaCalcId } from './UtPcaCalcId';
export class UtPcaCalcLvlId {
	calcLvlId?: number;
	calcLvlNm?: string;
	deletedFlag?: number;
	utPcaCalcId?: Array<UtPcaCalcId>;
	constructor(obj: any = {}) {
		this.calcLvlId = obj.calcLvlId;
		this.calcLvlNm = obj.calcLvlNm;
		this.deletedFlag = obj.deletedFlag;
		this.utPcaCalcId = obj.utPcaCalcId.map(o => new UtPcaCalcId(o));
	}
}
