import { UtPcaClientId } from './UtPcaClientId';
import { UtPcaHptblColMapDefnId } from './UtPcaHptblColMapDefnId';
export class UtPcaHptblColMapId {
	hptblColMapId?: number;
	clientId?: number;
	hptblColMapName?: string;
	deletedFlag?: string;
	hptblColMapDestTbl?: string;
	hptblColMapStampDt?: string;
	hptblColMapStampUsr?: string;
	hptblColMapNote?: string;
	isAggregate?: boolean;
	client?: UtPcaClientId;
	utPcaHptblColMapDefnId?: Array<UtPcaHptblColMapDefnId>;
	constructor(obj: any = {}) {
		this.hptblColMapId = obj.hptblColMapId;
		this.clientId = obj.clientId;
		this.hptblColMapName = obj.hptblColMapName;
		this.deletedFlag = obj.deletedFlag;
		this.hptblColMapDestTbl = obj.hptblColMapDestTbl;
		this.hptblColMapStampDt = obj.hptblColMapStampDt;
		this.hptblColMapStampUsr = obj.hptblColMapStampUsr;
		this.hptblColMapNote = obj.hptblColMapNote;
		this.isAggregate = obj.isAggregate;
		this.client = new UtPcaClientId(obj.client);
		this.utPcaHptblColMapDefnId = obj.utPcaHptblColMapDefnId.map(o => new UtPcaHptblColMapDefnId(o));
	}
}
