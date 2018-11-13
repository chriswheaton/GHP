import { UtPcaHpcycleId } from './UtPcaHpcycleId';
import { UtPcaRunId } from './UtPcaRunId';
export class UtPcaHprunCycleId {
	hprunCycleId?: number;
	hpcycleId?: number;
	runId?: number;
	hprunCycleIeId?: number;
	hprunCycleStampDt?: string;
	hprunCycleStampUsr?: string;
	hprunCycleCreateDate?: string;
	hprunCycleUpdateDate?: string;
	hpcycle?: UtPcaHpcycleId;
	run?: UtPcaRunId;
	constructor(obj: any = {}) {
		this.hprunCycleId = obj.hprunCycleId;
		this.hpcycleId = obj.hpcycleId;
		this.runId = obj.runId;
		this.hprunCycleIeId = obj.hprunCycleIeId;
		this.hprunCycleStampDt = obj.hprunCycleStampDt;
		this.hprunCycleStampUsr = obj.hprunCycleStampUsr;
		this.hprunCycleCreateDate = obj.hprunCycleCreateDate;
		this.hprunCycleUpdateDate = obj.hprunCycleUpdateDate;
		this.hpcycle = new UtPcaHpcycleId(obj.hpcycle);
		this.run = new UtPcaRunId(obj.run);
	}
}
