import { UtPcaBenefId } from './UtPcaBenefId';
import { UtPcaBenefTypeBId } from './UtPcaBenefTypeBId';
export class UtPcaBenefTypeAId {
	benefTypeAId?: number;
	benefTypeANm?: string;
	utPcaBenefId?: Array<UtPcaBenefId>;
	utPcaBenefTypeBId?: Array<UtPcaBenefTypeBId>;
	constructor(obj: any = {}) {
		this.benefTypeAId = obj.benefTypeAId;
		this.benefTypeANm = obj.benefTypeANm;
		this.utPcaBenefId = obj.utPcaBenefId.map(o => new UtPcaBenefId(o));
		this.utPcaBenefTypeBId = obj.utPcaBenefTypeBId.map(o => new UtPcaBenefTypeBId(o));
	}
}
