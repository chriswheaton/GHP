import { ProOptFormularyPrecendDefnId } from './ProOptFormularyPrecendDefnId';
export class ProOptFormularyOrderId {
	formularyOrderId?: number;
	formularyOrderNm?: string;
	formularyOrderNote?: string;
	proOptFormularyPrecendDefnId?: Array<ProOptFormularyPrecendDefnId>;
	constructor(obj: any = {}) {
		this.formularyOrderId = obj.formularyOrderId;
		this.formularyOrderNm = obj.formularyOrderNm;
		this.formularyOrderNote = obj.formularyOrderNote;
		this.proOptFormularyPrecendDefnId = obj.proOptFormularyPrecendDefnId.map(o => new ProOptFormularyPrecendDefnId(o));
	}
}
