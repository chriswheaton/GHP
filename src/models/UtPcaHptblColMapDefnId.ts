import { UtPcaHptblColMapId } from './UtPcaHptblColMapId';
export class UtPcaHptblColMapDefnId {
	hptblColMapDefnId?: number;
	hptblColMapId?: number;
	hptblColMapDestTbl?: string;
	hptblColMapColDest?: string;
	hptblColMapColSrc?: string;
	hptblColMapDefnStampDt?: string;
	hptblColMapDefnStampUsr?: string;
	hptblColMap?: UtPcaHptblColMapId;
	constructor(obj: any = {}) {
		this.hptblColMapDefnId = obj.hptblColMapDefnId;
		this.hptblColMapId = obj.hptblColMapId;
		this.hptblColMapDestTbl = obj.hptblColMapDestTbl;
		this.hptblColMapColDest = obj.hptblColMapColDest;
		this.hptblColMapColSrc = obj.hptblColMapColSrc;
		this.hptblColMapDefnStampDt = obj.hptblColMapDefnStampDt;
		this.hptblColMapDefnStampUsr = obj.hptblColMapDefnStampUsr;
		this.hptblColMap = new UtPcaHptblColMapId(obj.hptblColMap);
	}
}
