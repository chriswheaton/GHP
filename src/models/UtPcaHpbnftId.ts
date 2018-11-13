import { UtPcaClientId } from './UtPcaClientId';
import { UtPcaHpbnftDefnId } from './UtPcaHpbnftDefnId';
export class UtPcaHpbnftId {
	hpbnftId?: number;
	clientId?: number;
	hpbnftNm?: string;
	deletedFlag?: string;
	hpbnftNote?: string;
	hpbnftCreateDate?: string;
	hpbnftUpdateDate?: string;
	client?: UtPcaClientId;
	utPcaHpbnftDefnId?: Array<UtPcaHpbnftDefnId>;
	constructor(obj: any = {}) {
		this.hpbnftId = obj.hpbnftId;
		this.clientId = obj.clientId;
		this.hpbnftNm = obj.hpbnftNm;
		this.deletedFlag = obj.deletedFlag;
		this.hpbnftNote = obj.hpbnftNote;
		this.hpbnftCreateDate = obj.hpbnftCreateDate;
		this.hpbnftUpdateDate = obj.hpbnftUpdateDate;
		this.client = new UtPcaClientId(obj.client);
		this.utPcaHpbnftDefnId = obj.utPcaHpbnftDefnId.map(o => new UtPcaHpbnftDefnId(o));
	}
}
