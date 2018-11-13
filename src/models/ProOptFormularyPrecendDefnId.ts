import { ProOptFormularyId } from './ProOptFormularyId';
import { ProOptFormularyOrderId } from './ProOptFormularyOrderId';
export class ProOptFormularyPrecendDefnId {
	formularyPrecendDefnId?: number;
	formularyId?: number;
	formularyOrderId?: number;
	formularyPrecendId?: number;
	formularyEffecDt?: string;
	formularyTermDt?: string;
	formularyStampDt?: string;
	formularyStampUsr?: string;
	formularyPrecendCreateDate?: string;
	formularyPrecendUpdateDate?: string;
	formulary?: ProOptFormularyId;
	formularyOrder?: ProOptFormularyOrderId;
	constructor(obj: any = {}) {
		this.formularyPrecendDefnId = obj.formularyPrecendDefnId;
		this.formularyId = obj.formularyId;
		this.formularyOrderId = obj.formularyOrderId;
		this.formularyPrecendId = obj.formularyPrecendId;
		this.formularyEffecDt = obj.formularyEffecDt;
		this.formularyTermDt = obj.formularyTermDt;
		this.formularyStampDt = obj.formularyStampDt;
		this.formularyStampUsr = obj.formularyStampUsr;
		this.formularyPrecendCreateDate = obj.formularyPrecendCreateDate;
		this.formularyPrecendUpdateDate = obj.formularyPrecendUpdateDate;
		this.formulary = new ProOptFormularyId(obj.formulary);
		this.formularyOrder = new ProOptFormularyOrderId(obj.formularyOrder);
	}
}
