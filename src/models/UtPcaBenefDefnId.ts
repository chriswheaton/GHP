import { UtPcaBenefId } from './UtPcaBenefId';
export class UtPcaBenefDefnId {
	benefDefnId?: number;
	benefId?: boolean;
	benefDefnTierVal?: number;
	benefDefnRateVal?: number;
	critRateId?: number;
	benefDefnCreateDate?: string;
	benefDefnUpdateDate?: string;
	benef?: UtPcaBenefId;
	constructor(obj: any = {}) {
		this.benefDefnId = obj.benefDefnId;
		this.benefId = obj.benefId;
		this.benefDefnTierVal = obj.benefDefnTierVal;
		this.benefDefnRateVal = obj.benefDefnRateVal;
		this.critRateId = obj.critRateId;
		this.benefDefnCreateDate = obj.benefDefnCreateDate;
		this.benefDefnUpdateDate = obj.benefDefnUpdateDate;
		this.benef = new UtPcaBenefId(obj.benef);
	}
}
