import { UtPcaContId } from './UtPcaContId';
import { UtPcaContProdId } from './UtPcaContProdId';
export class UtPcaContStatusId {
	contStatusId?: number;
	contStatusName?: string;
	utPcaContId?: Array<UtPcaContId>;
	utPcaContProdId?: Array<UtPcaContProdId>;
	constructor(obj: any = {}) {
		this.contStatusId = obj.contStatusId;
		this.contStatusName = obj.contStatusName;
		this.utPcaContId = obj.utPcaContId.map(o => new UtPcaContId(o));
		this.utPcaContProdId = obj.utPcaContProdId.map(o => new UtPcaContProdId(o));
	}
}
