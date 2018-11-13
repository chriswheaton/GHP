import { UtPcaHpdsgnId } from './UtPcaHpdsgnId';
export class UtPcaHpdsgnDefnId {
	hpdsgnDefnId?: number;
	hpdsgnId?: number;
	hpbnftId?: number;
	hpfrmlyId?: number;
	hpdsgnEffecDt?: string;
	hpdsgnStampDt?: string;
	hpdsgnStampUsr?: string;
	hpdsgnDefnCreateDate?: string;
	hpdsgnDefnUpdateDate?: string;
	hpdsgn?: UtPcaHpdsgnId;
	constructor(obj: any = {}) {
		this.hpdsgnDefnId = obj.hpdsgnDefnId;
		this.hpdsgnId = obj.hpdsgnId;
		this.hpbnftId = obj.hpbnftId;
		this.hpfrmlyId = obj.hpfrmlyId;
		this.hpdsgnEffecDt = obj.hpdsgnEffecDt;
		this.hpdsgnStampDt = obj.hpdsgnStampDt;
		this.hpdsgnStampUsr = obj.hpdsgnStampUsr;
		this.hpdsgnDefnCreateDate = obj.hpdsgnDefnCreateDate;
		this.hpdsgnDefnUpdateDate = obj.hpdsgnDefnUpdateDate;
		this.hpdsgn = new UtPcaHpdsgnId(obj.hpdsgn);
	}
}
