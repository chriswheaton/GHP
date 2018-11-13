import { UtPcaMktbsktId } from './UtPcaMktbsktId';
import { UtPcaMktbsktDefnIEId } from './UtPcaMktbsktDefnIEId';
export class UtPcaMktbsktDefnId {
	mktbsktDefnId?: number;
	mktbsktId?: number;
	mktbsktNumDen?: string;
	mktbsktDefnIEId?: number;
	mktbsktDefnProd?: string;
	mktbsktDefnForm?: string;
	mktbsktDefnStgth?: string;
	mktbsktDefnRoute?: string;
	mktbsktDefnNdc11?: string;
	mktbsktDefnGroup?: string;
	mktbsktDefnDot?: number;
	mktbsktDefnTher?: string;
	blockWildCard?: boolean;
	mktbsktDefnStgthUom?: string;
	blockStopGap?: boolean;
	blockCatFilter?: boolean;
	mktbsktDefnUpdateDate?: string;
	mktbsktDefnCreateDate?: string;
	lastChangeUser?: string;
	lastChangeDate?: string;
	mktbskt?: UtPcaMktbsktId;
	mktbsktDefnIE?: UtPcaMktbsktDefnIEId;
	constructor(obj: any = {}) {
		this.mktbsktDefnId = obj.mktbsktDefnId;
		this.mktbsktId = obj.mktbsktId;
		this.mktbsktNumDen = obj.mktbsktNumDen;
		this.mktbsktDefnIEId = obj.mktbsktDefnIEId;
		this.mktbsktDefnProd = obj.mktbsktDefnProd;
		this.mktbsktDefnForm = obj.mktbsktDefnForm;
		this.mktbsktDefnStgth = obj.mktbsktDefnStgth;
		this.mktbsktDefnRoute = obj.mktbsktDefnRoute;
		this.mktbsktDefnNdc11 = obj.mktbsktDefnNdc11;
		this.mktbsktDefnGroup = obj.mktbsktDefnGroup;
		this.mktbsktDefnDot = obj.mktbsktDefnDot;
		this.mktbsktDefnTher = obj.mktbsktDefnTher;
		this.blockWildCard = obj.blockWildCard;
		this.mktbsktDefnStgthUom = obj.mktbsktDefnStgthUom;
		this.blockStopGap = obj.blockStopGap;
		this.mktbsktDefnUpdateDate = obj.mktbsktDefnUpdateDate;
		this.mktbsktDefnCreateDate = obj.mktbsktDefnCreateDate;
		this.lastChangeUser = obj.lastChangeUser;
		this.lastChangeDate = obj.lastChangeDate;
		this.mktbskt = new UtPcaMktbsktId(obj.mktbskt);
		this.mktbsktDefnIE = new UtPcaMktbsktDefnIEId(obj.mktbsktDefnIE);
	}
}
