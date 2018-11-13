import { UtPcaHpclntGrpId } from './UtPcaHpclntGrpId';
import { UtPcaHpclntGrpOrderId } from './UtPcaHpclntGrpOrderId';
export class UtPcaHpclntGrpPrecendDefnId {
	hpclntGrpPrecendDefnId?: number;
	hpclntGrpId?: number;
	hpclntGrpOrderId?: number;
	hpclntGrpPrecendId?: number;
	hpclntGrpEffecDt?: string;
	hpclntGrpTermDt?: string;
	hpclntGrpStampDt?: string;
	hpclntGrpStampUsr?: string;
	hpclntGrpEmail?: string;
	hpclntGrpPrecendCreateDate?: string;
	hpclntGrpPrecendUpdateDate?: string;
	lastChangeUser?: string;
	lastChangeDate?: string;
	hpclntGrp?: UtPcaHpclntGrpId;
	hpclntGrpOrder?: UtPcaHpclntGrpOrderId;
	constructor(obj: any = {}) {
		this.hpclntGrpPrecendDefnId = obj.hpclntGrpPrecendDefnId;
		this.hpclntGrpId = obj.hpclntGrpId;
		this.hpclntGrpOrderId = obj.hpclntGrpOrderId;
		this.hpclntGrpPrecendId = obj.hpclntGrpPrecendId;
		this.hpclntGrpEffecDt = obj.hpclntGrpEffecDt;
		this.hpclntGrpTermDt = obj.hpclntGrpTermDt;
		this.hpclntGrpStampDt = obj.hpclntGrpStampDt;
		this.hpclntGrpStampUsr = obj.hpclntGrpStampUsr;
		this.hpclntGrpEmail = obj.hpclntGrpEmail;
		this.hpclntGrpPrecendCreateDate = obj.hpclntGrpPrecendCreateDate;
		this.hpclntGrpPrecendUpdateDate = obj.hpclntGrpPrecendUpdateDate;
		this.lastChangeUser = obj.lastChangeUser;
		this.lastChangeDate = obj.lastChangeDate;
		this.hpclntGrp = new UtPcaHpclntGrpId(obj.hpclntGrp);
		this.hpclntGrpOrder = new UtPcaHpclntGrpOrderId(obj.hpclntGrpOrder);
	}
}
