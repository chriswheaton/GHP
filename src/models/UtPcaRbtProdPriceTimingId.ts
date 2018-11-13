import { UtPcaRbtProdId } from './UtPcaRbtProdId';
export class UtPcaRbtProdPriceTimingId {
	rbtProdPriceTimingId?: number;
	rbtProdPriceTimingNm?: string;
	utPcaRbtProdId?: Array<UtPcaRbtProdId>;
	constructor(obj: any = {}) {
		this.rbtProdPriceTimingId = obj.rbtProdPriceTimingId;
		this.rbtProdPriceTimingNm = obj.rbtProdPriceTimingNm;
		this.utPcaRbtProdId = obj.utPcaRbtProdId.map(o => new UtPcaRbtProdId(o));
	}
}
