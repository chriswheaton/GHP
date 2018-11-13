import { UtPcaClientId } from './UtPcaClientId';
import { UtPcaHprunCycleId } from './UtPcaHprunCycleId';
export class UtPcaRunId {
	runId?: number;
	clientId?: number;
	deletedFlag?: string;
	runPeriodType?: string;
	charRunPeriodNm?: string;
	runName?: string;
	runCreatDt?: string;
	modelInc?: number;
	beginDate?: string;
	endDate?: string;
	isAggregate?: boolean;
	aggregateCycleId?: number;
	runLockFlag?: boolean;
	runCreateDate?: string;
	runUpdateDate?: string;
	runTypeId?: number;
	claimCycleId?: number;
	runNote?: string;
	cycleListChangeDate?: string;
	client?: UtPcaClientId;
	utPcaHprunCycleId?: Array<UtPcaHprunCycleId>;
	constructor(obj: any = {}) {
		this.runId = obj.runId;
		this.clientId = obj.clientId;
		this.deletedFlag = obj.deletedFlag;
		this.runPeriodType = obj.runPeriodType;
		this.charRunPeriodNm = obj.charRunPeriodNm;
		this.runName = obj.runName;
		this.runCreatDt = obj.runCreatDt;
		this.modelInc = obj.modelInc;
		this.beginDate = obj.beginDate;
		this.endDate = obj.endDate;
		this.isAggregate = obj.isAggregate;
		this.aggregateCycleId = obj.aggregateCycleId;
		this.runLockFlag = obj.runLockFlag;
		this.runCreateDate = obj.runCreateDate;
		this.runUpdateDate = obj.runUpdateDate;
		this.runTypeId = obj.runTypeId;
		this.claimCycleId = obj.claimCycleId;
		this.runNote = obj.runNote;
		this.cycleListChangeDate = obj.cycleListChangeDate;
		this.client = new UtPcaClientId(obj.client);
		this.utPcaHprunCycleId = obj.utPcaHprunCycleId.map(o => new UtPcaHprunCycleId(o));
	}
}
