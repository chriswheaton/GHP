import { ProOptFormularyId } from './ProOptFormularyId';
export class ProOptFormularyDefnId {
	formularyDefnId?: number;
	formularyId?: number;
	formularyNumDen?: string;
	hpbnftTypeId?: number;
	formularyDefnProd?: string;
	formularyDefnForm?: string;
	formularyDefnStgth?: string;
	formularyDefnRoute?: string;
	formularyDefnNdc11?: string;
	formularyDefnEffecDt?: string;
	formularyDefnTermDt?: string;
	formularyDefnStampDt?: string;
	formularyDefnStampUsr?: string;
	clinicalEditRuleId?: number;
	formularyDefnIe?: number;
	blockWildCard?: boolean;
	formularyDefnStgthUom?: string;
	formularyDefnTher?: string;
	formularyDefnCreateDate?: string;
	formularyDefnUpdateDate?: string;
	formularyDefnNote?: string;
	formulary?: ProOptFormularyId;
	constructor(obj: any = {}) {
		this.formularyDefnId = obj.formularyDefnId;
		this.formularyId = obj.formularyId;
		this.formularyNumDen = obj.formularyNumDen;
		this.hpbnftTypeId = obj.hpbnftTypeId;
		this.formularyDefnProd = obj.formularyDefnProd;
		this.formularyDefnForm = obj.formularyDefnForm;
		this.formularyDefnStgth = obj.formularyDefnStgth;
		this.formularyDefnRoute = obj.formularyDefnRoute;
		this.formularyDefnNdc11 = obj.formularyDefnNdc11;
		this.formularyDefnEffecDt = obj.formularyDefnEffecDt;
		this.formularyDefnTermDt = obj.formularyDefnTermDt;
		this.formularyDefnStampDt = obj.formularyDefnStampDt;
		this.formularyDefnStampUsr = obj.formularyDefnStampUsr;
		this.clinicalEditRuleId = obj.clinicalEditRuleId;
		this.formularyDefnIe = obj.formularyDefnIe;
		this.blockWildCard = obj.blockWildCard;
		this.formularyDefnStgthUom = obj.formularyDefnStgthUom;
		this.formularyDefnTher = obj.formularyDefnTher;
		this.formularyDefnCreateDate = obj.formularyDefnCreateDate;
		this.formularyDefnUpdateDate = obj.formularyDefnUpdateDate;
		this.formularyDefnNote = obj.formularyDefnNote;
		this.formulary = new ProOptFormularyId(obj.formulary);
	}
}
