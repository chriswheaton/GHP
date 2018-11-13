import { UtPcaContStatusId } from './UtPcaContStatusId';
import { UtPcaBenefId } from './UtPcaBenefId';
import { UtPcaFormId } from './UtPcaFormId';
import { UtPcaMktbsktId } from './UtPcaMktbsktId';
import { UtPcaRbtProdId } from './UtPcaRbtProdId';
export class UtPcaContProdId {
	contProdId?: number;
	contId?: number;
	deletedFlag?: string;
	contProdName?: string;
	contProdEffecDt?: string;
	contProdTermDt?: string;
	contProdStatusId?: number;
	portfolioInd?: number;
	contProdNote?: string;
	beforeEffDays?: number;
	afterTermDays?: number;
	contProdCreateDate?: string;
	contProdUpdateDate?: string;
	lastChangeUser?: string;
	lastChangeDate?: string;
	contProdStatus?: UtPcaContStatusId;
	utPcaBenefId?: Array<UtPcaBenefId>;
	utPcaFormId?: Array<UtPcaFormId>;
	utPcaMktbsktId?: Array<UtPcaMktbsktId>;
	utPcaRbtProdId?: Array<UtPcaRbtProdId>;
	constructor(obj: any = {}) {
		this.contProdId = obj.contProdId;
		this.contId = obj.contId;
		this.deletedFlag = obj.deletedFlag;
		this.contProdName = obj.contProdName;
		this.contProdEffecDt = obj.contProdEffecDt;
		this.contProdTermDt = obj.contProdTermDt;
		this.contProdStatusId = obj.contProdStatusId;
		this.portfolioInd = obj.portfolioInd;
		this.contProdNote = obj.contProdNote;
		this.beforeEffDays = obj.beforeEffDays;
		this.afterTermDays = obj.afterTermDays;
		this.contProdCreateDate = obj.contProdCreateDate;
		this.contProdUpdateDate = obj.contProdUpdateDate;
		this.lastChangeUser = obj.lastChangeUser;
		this.lastChangeDate = obj.lastChangeDate;
		this.contProdStatus = new UtPcaContStatusId(obj.contProdStatus);
		this.utPcaBenefId = obj.utPcaBenefId.map(o => new UtPcaBenefId(o));
		this.utPcaFormId = obj.utPcaFormId.map(o => new UtPcaFormId(o));
		this.utPcaMktbsktId = obj.utPcaMktbsktId.map(o => new UtPcaMktbsktId(o));
		this.utPcaRbtProdId = obj.utPcaRbtProdId.map(o => new UtPcaRbtProdId(o));
	}
}
