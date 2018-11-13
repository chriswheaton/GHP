import { UtPcaClientId } from './UtPcaClientId';
import { UtPcaResultMaster } from './UtPcaResultMaster';
export class UtPcaResultClientId {
	resultClientId?: number;
	clientId?: number;
	keyToUtlz?: string;
	keyToUtlzDesc?: string;
	client?: UtPcaClientId;
	utPcaResultMaster?: Array<UtPcaResultMaster>;
	constructor(obj: any = {}) {
		this.resultClientId = obj.resultClientId;
		this.clientId = obj.clientId;
		this.keyToUtlz = obj.keyToUtlz;
		this.keyToUtlzDesc = obj.keyToUtlzDesc;
		this.client = new UtPcaClientId(obj.client);
		this.utPcaResultMaster = obj.utPcaResultMaster.map(o => new UtPcaResultMaster(o));
	}
}
