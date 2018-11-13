import { UtPcaHpfrmlyId } from './UtPcaHpfrmlyId';
import { UtPcaHpfrmlyOrderId } from './UtPcaHpfrmlyOrderId';
export class UtPcaHpfrmlyPrecendDefnId {
	hpfrmlyPrecendDefnId?: number;
	hpfrmlyId?: number;
	hpfrmlyOrderId?: number;
	hpfrmlyPrecendId?: number;
	hpfrmlyEffecDt?: string;
	hpfrmlyTermDt?: string;
	hpfrmlyStampDt?: string;
	hpfrmlyStampUsr?: string;
	hpfrmlyPrecendCreateDate?: string;
	hpfrmlyPrecendUpdateDate?: string;
	lastChangeUser?: string;
	lastChangeDate?: string;
	hpfrmly?: UtPcaHpfrmlyId;
	hpfrmlyOrder?: UtPcaHpfrmlyOrderId;
	constructor(obj: any = {}) {
		this.hpfrmlyPrecendDefnId = obj.hpfrmlyPrecendDefnId;
		this.hpfrmlyId = obj.hpfrmlyId;
		this.hpfrmlyOrderId = obj.hpfrmlyOrderId;
		this.hpfrmlyPrecendId = obj.hpfrmlyPrecendId;
		this.hpfrmlyEffecDt = obj.hpfrmlyEffecDt;
		this.hpfrmlyTermDt = obj.hpfrmlyTermDt;
		this.hpfrmlyStampDt = obj.hpfrmlyStampDt;
		this.hpfrmlyStampUsr = obj.hpfrmlyStampUsr;
		this.hpfrmlyPrecendCreateDate = obj.hpfrmlyPrecendCreateDate;
		this.hpfrmlyPrecendUpdateDate = obj.hpfrmlyPrecendUpdateDate;
		this.lastChangeUser = obj.lastChangeUser;
		this.lastChangeDate = obj.lastChangeDate;
		this.hpfrmly = new UtPcaHpfrmlyId(obj.hpfrmly);
		this.hpfrmlyOrder = new UtPcaHpfrmlyOrderId(obj.hpfrmlyOrder);
	}
}
