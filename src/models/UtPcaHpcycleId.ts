import { UtPcaClientId } from './UtPcaClientId';
import { UtPcaHprunCycleId } from './UtPcaHprunCycleId';
export class UtPcaHpcycleId {
	hpcycleId?: number;
	clientId?: number;
	deletedFlag?: string;
	hpcycleName?: string;
	hpcycleEffecDt?: string;
	hpcycleTermDt?: string;
	hpcycleNote?: string;
	hpcycleStampDt?: string;
	hpcycleStampUsr?: string;
	isAggregate?: boolean;
	hptblColMapId?: number;
	hpcycleCreateDate?: string;
	hpcycleUpdateDate?: string;
	isSummary?: boolean;
	isClaimCycle?: boolean;
	client?: UtPcaClientId;
	utPcaHprunCycleId?: Array<UtPcaHprunCycleId>;
	constructor(obj: any = {}) {
		this.hpcycleId = obj.hpcycleId;
		this.clientId = obj.clientId;
		this.deletedFlag = obj.deletedFlag;
		this.hpcycleName = obj.hpcycleName;
		this.hpcycleEffecDt = obj.hpcycleEffecDt;
		this.hpcycleTermDt = obj.hpcycleTermDt;
		this.hpcycleNote = obj.hpcycleNote;
		this.hpcycleStampDt = obj.hpcycleStampDt;
		this.hpcycleStampUsr = obj.hpcycleStampUsr;
		this.isAggregate = obj.isAggregate;
		this.hptblColMapId = obj.hptblColMapId;
		this.hpcycleCreateDate = obj.hpcycleCreateDate;
		this.hpcycleUpdateDate = obj.hpcycleUpdateDate;
		this.isSummary = obj.isSummary;
		this.isClaimCycle = obj.isClaimCycle;
		this.client = new UtPcaClientId(obj.client);
		this.utPcaHprunCycleId = obj.utPcaHprunCycleId.map(o => new UtPcaHprunCycleId(o));
	}
}
