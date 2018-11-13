import { UtPcaBenefTypeBId } from './UtPcaBenefTypeBId';
import { UtPcaBenefId } from './UtPcaBenefId';
export class UtPcaBenefTypeCId {
	benefTypeCId?: number;
	benefTypeBId?: number;
	benefTypeCNm?: string;
	benefTypeB?: UtPcaBenefTypeBId;
	utPcaBenefId?: Array<UtPcaBenefId>;
	constructor(obj: any = {}) {
		this.benefTypeCId = obj.benefTypeCId;
		this.benefTypeBId = obj.benefTypeBId;
		this.benefTypeCNm = obj.benefTypeCNm;
		this.benefTypeB = new UtPcaBenefTypeBId(obj.benefTypeB);
		this.utPcaBenefId = obj.utPcaBenefId.map(o => new UtPcaBenefId(o));
	}
}
