import { UtPcaBenefTypeAId } from './UtPcaBenefTypeAId';
import { UtPcaBenefId } from './UtPcaBenefId';
import { UtPcaBenefTypeCId } from './utPcaBenefTypeCId';
export class UtPcaBenefTypeBId {
	benefTypeBId?: number;
	benefTypeAId?: number;
	benefTypeBNm?: string;
	benefTypeA?: UtPcaBenefTypeAId;
	utPcaBenefId?: Array<UtPcaBenefId>;
	utPcaBenefTypeCId?: Array<UtPcaBenefTypeCId>;
	constructor(obj: any = {}) {
		this.benefTypeBId = obj.benefTypeBId;
		this.benefTypeAId = obj.benefTypeAId;
		this.benefTypeBNm = obj.benefTypeBNm;
		this.benefTypeA = new UtPcaBenefTypeAId(obj.benefTypeA);
		this.utPcaBenefId = obj.utPcaBenefId.map(o => new UtPcaBenefId(o));
		this.utPcaBenefTypeCId = obj.utPcaBenefTypeCId.map(o => new UtPcaBenefTypeCId(o));
	}
}
