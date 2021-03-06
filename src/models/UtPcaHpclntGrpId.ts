import { UtPcaClientId } from './UtPcaClientId';
import { UtPcaHpclntGrpDefnId } from './UtPcaHpclntGrpDefnId';
import { UtPcaHpclntGrpPrecendDefnId } from './UtPcaHpclntGrpPrecendDefnId';
export class UtPcaHpclntGrpId {
	hpclntGrpId?: number;
	clientId?: number;
	hpclntGrpNm?: string;
	hpdsgnId?: number;
	deletedFlag?: string;
	hpclntGrpNote?: string;
	reportingInclude?: boolean;
	hpclntGrpDisplayNm?: string;
	clntGrpTypeId?: number;
	hpclntGrpCreateDate?: string;
	hpclntGrpUpdateDate?: string;
	hpclntGrpAddress?: string;
	hpclntGrpEffectiveDate?: string;
	hpclntGrpOther?: string;
	hpclntGrpUserDefinedOne?: string;
	hpclntGrpUserDefinedTwo?: string;
	hpclntGrpUserDefinedThree?: string;
	hpclntGrpUserDefinedFour?: string;
	hpclntGrpUserDefinedFive?: string;
	hpclntGrpUserDefinedSix?: string;
	hpclntGrpUserDefinedSeven?: string;
	hpclntGrpUserDefinedEight?: string;
	hpclntGrpUserDefinedNine?: string;
	hpclntGrpUserDefinedTen?: string;
	lastChangeUser?: string;
	lastChangeDate?: string;
	client?: UtPcaClientId;
	utPcaHpclntGrpDefnId?: Array<UtPcaHpclntGrpDefnId>;
	utPcaHpclntGrpPrecendDefnId?: Array<UtPcaHpclntGrpPrecendDefnId>;
	constructor(obj: any = {}) {
		this.hpclntGrpId = obj.hpclntGrpId;
		this.clientId = obj.clientId;
		this.hpclntGrpNm = obj.hpclntGrpNm;
		this.hpdsgnId = obj.hpdsgnId;
		this.deletedFlag = obj.deletedFlag;
		this.hpclntGrpNote = obj.hpclntGrpNote;
		this.reportingInclude = obj.reportingInclude;
		this.hpclntGrpDisplayNm = obj.hpclntGrpDisplayNm;
		this.clntGrpTypeId = obj.clntGrpTypeId;
		this.hpclntGrpCreateDate = obj.hpclntGrpCreateDate;
		this.hpclntGrpUpdateDate = obj.hpclntGrpUpdateDate;
		this.hpclntGrpAddress = obj.hpclntGrpAddress;
		this.hpclntGrpEffectiveDate = obj.hpclntGrpEffectiveDate;
		this.hpclntGrpOther = obj.hpclntGrpOther;
		this.hpclntGrpUserDefinedOne = obj.hpclntGrpUserDefinedOne;
		this.hpclntGrpUserDefinedTwo = obj.hpclntGrpUserDefinedTwo;
		this.hpclntGrpUserDefinedThree = obj.hpclntGrpUserDefinedThree;
		this.hpclntGrpUserDefinedFour = obj.hpclntGrpUserDefinedFour;
		this.hpclntGrpUserDefinedFive = obj.hpclntGrpUserDefinedFive;
		this.hpclntGrpUserDefinedSix = obj.hpclntGrpUserDefinedSix;
		this.hpclntGrpUserDefinedSeven = obj.hpclntGrpUserDefinedSeven;
		this.hpclntGrpUserDefinedEight = obj.hpclntGrpUserDefinedEight;
		this.hpclntGrpUserDefinedNine = obj.hpclntGrpUserDefinedNine;
		this.hpclntGrpUserDefinedTen = obj.hpclntGrpUserDefinedTen;
		this.lastChangeUser = obj.lastChangeUser;
		this.lastChangeDate = obj.lastChangeDate;
		this.client = new UtPcaClientId(obj.client);
		this.utPcaHpclntGrpDefnId = obj.utPcaHpclntGrpDefnId.map(o => new UtPcaHpclntGrpDefnId(o));
		this.utPcaHpclntGrpPrecendDefnId = obj.utPcaHpclntGrpPrecendDefnId.map(o => new UtPcaHpclntGrpPrecendDefnId(o));
	}
}
