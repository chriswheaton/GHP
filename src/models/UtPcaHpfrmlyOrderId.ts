import { UtPcaHpfrmlyPrecendDefnId } from './UtPcaHpfrmlyPrecendDefnId';
export class UtPcaHpfrmlyOrderId {
	hpfrmlyOrderId?: number;
	hpfrmlyOrderNm?: number;
	hpfrmlyOrderNote?: string;
	utPcaHpfrmlyPrecendDefnId?: Array<UtPcaHpfrmlyPrecendDefnId>; //
	constructor(obj: any = {}) {
		this.hpfrmlyOrderId = obj.hpfrmlyOrderId;
		this.hpfrmlyOrderNm = obj.hpfrmlyOrderNm;
		this.hpfrmlyOrderNote = obj.hpfrmlyOrderNote;
		this.utPcaHpfrmlyPrecendDefnId = obj.utPcaHpfrmlyPrecendDefnId.map(o => new UtPcaHpfrmlyPrecendDefnId(o));
	}
}
