import { UtPcaHpfrmlyId } from './UtPcaHpfrmlyId';
export class UtPcaHpfrmlyDefnId {
	hpfrmlyDefnId?: number;
	hpfrmlyId?: number;
	hpfrmlyNumDen?: string;
	hpbnftTypeId?: number;
	hpfrmlyDefnProd?: string;
	hpfrmlyDefnForm?: string;
	hpfrmlyDefnStgth?: string;
	hpfrmlyDefnRoute?: string;
	hpfrmlyDefnNdc11?: string;
	hpfrmlyDefnEffecDt?: string;
	hpfrmlyDefnTermDt?: string;
	hpfrmlyDefnStampDt?: string;
	hpfrmlyDefnStampUsr?: string;
	clinicalEditRuleId?: number;
	hpfrmlyDefnIe?: number;
	blockWildCard?: boolean;
	hpfrmlyDefnStgthUom?: string;
	hpfrmlyDefnTher?: string;
	hpfrmlyDefnCreateDate?: string;
	hpfrmlyDefnUpdateDate?: string;
	hpfrmlyDefnNote?: string;
	lastChangeUser?: string;
	lastChangeDate?: string;
	hpfrmly?: UtPcaHpfrmlyId;
	constructor(obj: any = {}) {
		this.hpfrmlyDefnId = obj.hpfrmlyDefnId;
		this.hpfrmlyId = obj.hpfrmlyId;
		this.hpfrmlyNumDen = obj.hpfrmlyNumDen;
		this.hpbnftTypeId = obj.hpbnftTypeId;
		this.hpfrmlyDefnProd = obj.hpfrmlyDefnProd;
		this.hpfrmlyDefnForm = obj.hpfrmlyDefnForm;
		this.hpfrmlyDefnStgth = obj.hpfrmlyDefnStgth;
		this.hpfrmlyDefnRoute = obj.hpfrmlyDefnRoute;
		this.hpfrmlyDefnNdc11 = obj.hpfrmlyDefnNdc11;
		this.hpfrmlyDefnEffecDt = obj.hpfrmlyDefnEffecDt;
		this.hpfrmlyDefnTermDt = obj.hpfrmlyDefnTermDt;
		this.hpfrmlyDefnStampDt = obj.hpfrmlyDefnStampDt;
		this.hpfrmlyDefnStampUsr = obj.hpfrmlyDefnStampUsr;
		this.clinicalEditRuleId = obj.clinicalEditRuleId;
		this.hpfrmlyDefnIe = obj.hpfrmlyDefnIe;
		this.blockWildCard = obj.blockWildCard;
		this.hpfrmlyDefnStgthUom = obj.hpfrmlyDefnStgthUom;
		this.hpfrmlyDefnTher = obj.hpfrmlyDefnTher;
		this.hpfrmlyDefnCreateDate = obj.hpfrmlyDefnCreateDate;
		this.hpfrmlyDefnUpdateDate = obj.hpfrmlyDefnUpdateDate;
		this.hpfrmlyDefnNote = obj.hpfrmlyDefnNote;
		this.lastChangeUser = obj.lastChangeUser;
		this.lastChangeDate = obj.lastChangeDate;
		this.hpfrmly = new UtPcaHpfrmlyId(obj.hpfrmly);
	}
}
