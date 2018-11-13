import { UtPcaClientId } from './UtPcaClientId';
import { UtPcaHpfrmlyDefnId } from './UtPcaHpfrmlyDefnId';
import { UtPcaHpfrmlyPrecendDefnId } from './UtPcaHpfrmlyPrecendDefnId';
export class UtPcaHpfrmlyId {
	hpfrmlyId?: number;
	clientId?: number;
	hpfrmlyNm?: string;
	deletedFlag?: string;
	hpfrmlyNote?: string;
	catagoryFilterType?: string;
	catagoryFilterIdlist?: string;
	frmlyTypeId?: number;
	hpfrmlyCreateDate?: string;
	hpfrmlyUpdateDate?: string;
	frmlyImportFileBase?: string;
	frmlyImportFileBaseUsage?: boolean;
	importGapFill?: number;
	databaseFeed?: boolean;
	lastChangeUser?: string;
	lastChangeDate?: string;
	client?: UtPcaClientId;
	utPcaHpfrmlyDefnId?: Array<UtPcaHpfrmlyDefnId>;
	utPcaHpfrmlyPrecendDefnId?: Array<UtPcaHpfrmlyPrecendDefnId>;
	constructor(obj: any = {}) {
		this.hpfrmlyId = obj.hpfrmlyId;
		this.clientId = obj.clientId;
		this.hpfrmlyNm = obj.hpfrmlyNm;
		this.deletedFlag = obj.deletedFlag;
		this.hpfrmlyNote = obj.hpfrmlyNote;
		this.catagoryFilterType = obj.catagoryFilterType;
		this.catagoryFilterIdlist = obj.catagoryFilterIdlist;
		this.frmlyTypeId = obj.frmlyTypeId;
		this.hpfrmlyCreateDate = obj.hpfrmlyCreateDate;
		this.hpfrmlyUpdateDate = obj.hpfrmlyUpdateDate;
		this.frmlyImportFileBase = obj.frmlyImportFileBase;
		this.frmlyImportFileBaseUsage = obj.frmlyImportFileBaseUsage;
		this.importGapFill = obj.importGapFill;
		this.databaseFeed = obj.databaseFeed;
		this.lastChangeUser = obj.lastChangeUser;
		this.lastChangeDate = obj.lastChangeDate;
		this.client = new UtPcaClientId(obj.client);
		this.utPcaHpfrmlyDefnId = obj.utPcaHpfrmlyDefnId.map(o => new UtPcaHpfrmlyDefnId(o));
		this.utPcaHpfrmlyPrecendDefnId = obj.utPcaHpfrmlyPrecendDefnId.map(o => new UtPcaHpfrmlyPrecendDefnId(o));
	}
}
