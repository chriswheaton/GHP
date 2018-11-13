import { UtPcaRbtProdDefnId } from './UtPcaRbtProdDefnId';
export class UtPcaRbtProdDefnIEId {
	rbtProdDefnIEId?: number;
	rbtProdDefnIENm?: string;
	utPcaRbtProdDefnId?: Array<UtPcaRbtProdDefnId>;
	constructor(obj: any = {}) {
		this.rbtProdDefnIEId = obj.rbtProdDefnIEId;
		this.rbtProdDefnIENm = obj.rbtProdDefnIENm;
		this.utPcaRbtProdDefnId = obj.utPcaRbtProdDefnId.map(o => new UtPcaRbtProdDefnId(o));
	}
}
