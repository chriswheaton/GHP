import { UtPcaBenefTypeAId } from './UtPcaBenefTypeAId';
import { UtPcaBenefTypeBId } from './UtPcaBenefTypeBId';
import { UtPcaBenefTypeCId } from './UtPcaBenefTypeCId';
import { UtPcaContProdId } from './UtPcaContProdId';
import { UtPcaBenefDefnId } from './UtPcaBenefDefnId';
export class UtPcaBenefId {
	benefId?: number;
	contProdId?: number;
	deletedFlag?: string;
	benefNm?: string;
	benefTypeAId?: number;
	benefTypeBId?: number;
	benefTypeCId?: number;
	mktbsktId?: number;
	benefNote?: string;
	benefCreateDate?: string;
	benefUpdateDate?: string;
	benefTypeA?: UtPcaBenefTypeAId;
	benefTypeB?: UtPcaBenefTypeBId;
	benefTypeC?: UtPcaBenefTypeCId;
	contProd?: UtPcaContProdId;
	utPcaBenefDefnId?: Array<UtPcaBenefDefnId>;
	constructor(obj: any = {}) {
		this.benefId = obj.benefId;
		this.contProdId = obj.contProdId;
		this.deletedFlag = obj.deletedFlag;
		this.benefNm = obj.benefNm;
		this.benefTypeAId = obj.benefTypeAId;
		this.benefTypeBId = obj.benefTypeBId;
		this.benefTypeCId = obj.benefTypeCId;
		this.mktbsktId = obj.mktbsktId;
		this.benefNote = obj.benefNote;
		this.benefCreateDate = obj.benefCreateDate;
		this.benefUpdateDate = obj.benefUpdateDate;
		this.benefTypeA = new UtPcaBenefTypeAId(obj.benefTypeA);
		this.benefTypeB = new UtPcaBenefTypeBId(obj.benefTypeB);
		this.benefTypeC = new UtPcaBenefTypeCId(obj.benefTypeC);
		this.contProd = new UtPcaContProdId(obj.contProd);
		this.utPcaBenefDefnId = obj.utPcaBenefDefnId.map(o => new UtPcaBenefDefnId(o));
	}
}
