import { UtPcaRbtProdId } from './UtPcaRbtProdId';
export class UtPcaRbtProdPriceTypeId {
	rbtProdPriceTypeId?: number;
	rbtProdPriceSourceId?: number;
	rbtProdPriceTypeNm?: string;
	utPcaRbtProdId?: Array<UtPcaRbtProdId>;
	constructor(obj: any = {}) {
		this.rbtProdPriceTypeId = obj.rbtProdPriceTypeId;
		this.rbtProdPriceSourceId = obj.rbtProdPriceSourceId;
		this.rbtProdPriceTypeNm = obj.rbtProdPriceTypeNm;
		this.utPcaRbtProdId = obj.utPcaRbtProdId.map(o => new UtPcaRbtProdId(o));
	}
}
