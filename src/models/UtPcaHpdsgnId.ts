import { UtPcaClientId } from './UtPcaClientId';
import { UtPcaHpdsgnDefnId } from './UtPcaHpdsgnDefnId';
export class UtPcaHpdsgnId {
	hpdsgnId?: number;
	clientId?: number;
	hpdsgnNm?: string;
	deletedFlag?: string;
	hpdsgnNote?: string;
	hpdsgnCreateDate?: string;
	hpdsgnUpdateDate?: string;
	client?: UtPcaClientId;
	utPcaHpdsgnDefnId?: Array<UtPcaHpdsgnDefnId>;
	constructor(obj: any = {}) {
		this.hpdsgnId = obj.hpdsgnId;
		this.clientId = obj.clientId;
		this.hpdsgnNm = obj.hpdsgnNm;
		this.deletedFlag = obj.deletedFlag;
		this.hpdsgnNote = obj.hpdsgnNote;
		this.hpdsgnCreateDate = obj.hpdsgnCreateDate;
		this.hpdsgnUpdateDate = obj.hpdsgnUpdateDate;
		this.client = new UtPcaClientId(obj.client);
		this.utPcaHpdsgnDefnId = obj.utPcaHpdsgnDefnId.map(o => new UtPcaHpdsgnDefnId(o));
	}
}
