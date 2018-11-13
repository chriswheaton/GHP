import { UtPcaClientId } from './UtPcaClientId';
export class UtPcaHpfrmtFileId {
	hpfrmtFileId?: number;
	clientId?: number;
	hpfrmtFileName?: string;
	deletedFlag?: string;
	hpfrmtFileCrtTblSql?: string;
	hpfrmtFileStampDt?: string;
	hpfrmtFileStampUsr?: string;
	fctrCopayAmt?: number;
	fctrCoinsAmt?: number;
	fctrAwpUnit?: number;
	fctrDispFee?: number;
	fctrNtwkDisc?: number;
	fctrIngCost?: number;
	fctrQuantity?: number;
	hpfrmtFileNote?: string;
	client?: UtPcaClientId;
	constructor(obj: any = {}) {
		this.hpfrmtFileId = obj.hpfrmtFileId;
		this.clientId = obj.clientId;
		this.hpfrmtFileName = obj.hpfrmtFileName;
		this.deletedFlag = obj.deletedFlag;
		this.hpfrmtFileCrtTblSql = obj.hpfrmtFileCrtTblSql;
		this.hpfrmtFileStampDt = obj.hpfrmtFileStampDt;
		this.hpfrmtFileStampUsr = obj.hpfrmtFileStampUsr;
		this.fctrCopayAmt = obj.fctrCopayAmt;
		this.fctrCoinsAmt = obj.fctrCoinsAmt;
		this.fctrAwpUnit = obj.fctrAwpUnit;
		this.fctrDispFee = obj.fctrDispFee;
		this.fctrNtwkDisc = obj.fctrNtwkDisc;
		this.fctrIngCost = obj.fctrIngCost;
		this.fctrQuantity = obj.fctrQuantity;
		this.hpfrmtFileNote = obj.hpfrmtFileNote;
		this.client = new UtPcaClientId(obj.client);
	}
}
