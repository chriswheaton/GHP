import { UtPcaClientId } from './UtPcaClientId';
import { ProOptFormularyDefnId } from './ProOptFormularyDefnId';
import { ProOptFormularyPrecendDefnId } from './ProOptFormularyPrecendDefnId';
export class ProOptFormularyId {
	formularyId?: number;
	clientId?: number;
	formularyNm?: string;
	deletedFlag?: string;
	formularyNote?: string;
	catagoryFilterType?: string;
	catagoryFilterIdlist?: string;
	formularyTypeId?: number;
	formularyCreateDate?: string;
	formularyUpdateDate?: string;
	formularyImportFileBase?: string;
	formularyImportFileBaseUsage?: boolean;
	importGapFill?: number;
	databaseFeed?: boolean;
	client?: UtPcaClientId;
	proOptFormularyDefnId?: Array<ProOptFormularyDefnId>;
	proOptFormularyPrecendDefnId?: Array<ProOptFormularyPrecendDefnId>;
	constructor(obj: any = {}) {
		this.formularyId = obj.formularyId;
		this.clientId = obj.clientId;
		this.formularyNm = obj.formularyNm;
		this.deletedFlag = obj.deletedFlag;
		this.formularyNote = obj.formularyNote;
		this.catagoryFilterType = obj.catagoryFilterType;
		this.catagoryFilterIdlist = obj.catagoryFilterIdlist;
		this.formularyTypeId = obj.formularyTypeId;
		this.formularyCreateDate = obj.formularyCreateDate;
		this.formularyUpdateDate = obj.formularyUpdateDate;
		this.formularyImportFileBase = obj.formularyImportFileBase;
		this.formularyImportFileBaseUsage = obj.formularyImportFileBaseUsage;
		this.importGapFill = obj.importGapFill;
		this.databaseFeed = obj.databaseFeed;
		this.client = new UtPcaClientId(obj.client);
		this.proOptFormularyDefnId = obj.proOptFormularyDefnId.map(o => new ProOptFormularyDefnId(o));
		this.proOptFormularyPrecendDefnId = obj.proOptFormularyPrecendDefnId.map(o => new ProOptFormularyDefnId(o));
	}
}
