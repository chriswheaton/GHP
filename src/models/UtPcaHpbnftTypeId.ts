import { UtPcaClientId } from './UtPcaClientId';
import { UtPcaHpbnftDefnId } from './UtPcaHpbnftDefnId';
export class UtPcaHpbnftTypeId {
	hpbnftTypeId?: number;
	clientId?: number;
	hpbnftTypeNm?: string;
	hpbnftTypeNote?: string;
	hpbnftTypeVarDisp?: number;
	client?: UtPcaClientId;
	utPcaHpbnftDefnId?: Array<UtPcaHpbnftDefnId>;
	constructor(obj: any = {}) {
		this.hpbnftTypeId = obj.hpbnftTypeId;
		this.clientId = obj.clientId;
		this.hpbnftTypeNm = obj.hpbnftTypeNm;
		this.hpbnftTypeNote = obj.hpbnftTypeNote;
		this.hpbnftTypeVarDisp = obj.hpbnftTypeVarDisp;
		this.client = new UtPcaClientId(obj.client);
		this.utPcaHpbnftDefnId = obj.utPcaHpbnftDefnId.map(o => new UtPcaHpbnftDefnId(o));
	}
}
