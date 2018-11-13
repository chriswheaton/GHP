import { UtPcaContProdId } from './UtPcaContProdId';
import { UtPcaMktbsktDefnId } from './UtPcaMktbsktDefnId';
export class UtPcaMktbsktId {
	mktbsktId?: number;
	contProdId?: number;
	deletedFlag?: string;
	mktbsktNm?: string;
	mktbsktNote?: string;
	mktbsktSuppressMfg?: boolean;
	catagoryFilterType?: string;
	catagoryFilterIdlist?: string;
	inEligRuleId?: number;
	therStopGapId?: number;
	mktbsktUpdateDate?: string;
	mktbsktCreateDate?: string;
	lastChangeUser?: string;
	lastChangeDate?: string;
	contProd?: UtPcaContProdId;
	utPcaMktbsktDefnId?: Array<UtPcaMktbsktDefnId>;
	constructor(obj: any = {}) {
		this.mktbsktId = obj.mktbsktId;
		this.contProdId = obj.contProdId;
		this.deletedFlag = obj.deletedFlag;
		this.mktbsktNm = obj.mktbsktNm;
		this.mktbsktNote = obj.mktbsktNote;
		this.mktbsktSuppressMfg = obj.mktbsktSuppressMfg;
		this.catagoryFilterType = obj.catagoryFilterType;
		this.catagoryFilterIdlist = obj.catagoryFilterIdlist;
		this.inEligRuleId = obj.inEligRuleId;
		this.therStopGapId = obj.therStopGapId;
		this.mktbsktUpdateDate = obj.mktbsktUpdateDate;
		this.mktbsktCreateDate = obj.mktbsktCreateDate;
		this.lastChangeUser = obj.lastChangeUser;
		this.lastChangeDate = obj.lastChangeDate;
		this.contProd = new UtPcaContProdId(obj.contProd);
		this.utPcaMktbsktDefnId = obj.utPcaMktbsktDefnId.map(o => new UtPcaMktbsktDefnId(o));
	}
}
