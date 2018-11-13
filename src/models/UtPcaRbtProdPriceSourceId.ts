import { UtPcaRbtProdId } from './UtPcaRbtProdId';
export class UtPcaRbtProdPriceSourceId {
	rbtProdPriceSourceId?: number;
	rbtProdPriceSourceNm?: string;
	utPcaRbtProdId?: Array<UtPcaRbtProdId>;
	constructor(obj: any = {}) {
		this.rbtProdPriceSourceId = obj.rbtProdPriceSourceId;
		this.rbtProdPriceSourceNm = obj.rbtProdPriceSourceNm;
		this.utPcaRbtProdId = obj.utPcaRbtProdId.map(o => new UtPcaRbtProdId(o));
	}
}
