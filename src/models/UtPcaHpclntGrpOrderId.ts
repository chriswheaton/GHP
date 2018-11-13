import { UtPcaHpclntGrpPrecendDefnId } from './UtPcaHpclntGrpPrecendDefnId';
export class UtPcaHpclntGrpOrderId {
	hpclntGrpOrderId?: number;
	hpclntGrpOrderNm?: string;
	hpclntGrpOrderNote?: string;
	utPcaHpclntGrpPrecendDefnId?: Array<UtPcaHpclntGrpPrecendDefnId>;
	constructor(obj: any = {}) {
		this.hpclntGrpOrderId = obj.hpclntGrpOrderId;
		this.hpclntGrpOrderNm = obj.hpclntGrpOrderNm;
		this.hpclntGrpOrderNote = obj.hpclntGrpOrderNote;
		this.utPcaHpclntGrpPrecendDefnId = obj.utPcaHpclntGrpPrecendDefnId.map(o => new UtPcaHpclntGrpPrecendDefnId(o));
	}
}
