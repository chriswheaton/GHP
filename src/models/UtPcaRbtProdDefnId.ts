import { UtPcaRbtProdId } from './UtPcaRbtProdId';
import { UtPcaRbtProdDefnIEId } from './UtPcaRbtProdDefnIEId';
export class UtPcaRbtProdDefnId {
	rbtProdDefnId?: number;
	rbtProdId?: number;
	rbtProdDefnIEId?: number;
	rbtProdDefnProd?: string;
	rbtProdDefnForm?: string;
	rbtProdDefnStgth?: string;
	rbtProdDefnRoute?: string;
	rbtProdDefnNdc11?: string;
	rbtProdDefnEffecDt?: string;
	rbtProdDefnTermDt?: string;
	rbtProdDefnPrice?: number;
	blockWildCard?: boolean;
	rbtProdDefnStgthUom?: string;
	rbtProdDefnRateValue?: number;
	rbtProdDefnCreateDate?: string;
	rbtProdDefnUpdateDate?: string;
	lastChangeUser?: string;
	lastChangeDate?: string;
	rbtProd?: UtPcaRbtProdId;
	rbtProdDefnIE?: UtPcaRbtProdDefnIEId;
	constructor(obj: any = {}) {
		this.rbtProdDefnId = obj.rbtProdDefnId;
		this.rbtProdId = obj.rbtProdId;
		this.rbtProdDefnIEId = obj.rbtProdDefnIEId;
		this.rbtProdDefnProd = obj.rbtProdDefnProd;
		this.rbtProdDefnForm = obj.rbtProdDefnForm;
		this.rbtProdDefnStgth = obj.rbtProdDefnStgth;
		this.rbtProdDefnRoute = obj.rbtProdDefnRoute;
		this.rbtProdDefnNdc11 = obj.rbtProdDefnNdc11;
		this.rbtProdDefnEffecDt = obj.rbtProdDefnEffecDt;
		this.rbtProdDefnTermDt = obj.rbtProdDefnTermDt;
		this.rbtProdDefnPrice = obj.rbtProdDefnPrice;
		this.blockWildCard = obj.blockWildCard;
		this.rbtProdDefnStgthUom = obj.rbtProdDefnStgthUom;
		this.rbtProdDefnRateValue = obj.rbtProdDefnRateValue;
		this.rbtProdDefnCreateDate = obj.rbtProdDefnCreateDate;
		this.rbtProdDefnUpdateDate = obj.rbtProdDefnUpdateDate;
		this.lastChangeUser = obj.lastChangeUser;
		this.lastChangeDate = obj.lastChangeDate;
		this.rbtProd = new UtPcaRbtProdId(obj.rbtProd);
		this.rbtProdDefnIE = new UtPcaRbtProdDefnIEId(obj.rbtProdDefnIE);
	}
}
