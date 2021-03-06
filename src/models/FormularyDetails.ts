import { FormularyHeader } from './FormularyHeader';
export class FormularyDetails {
	formularyIdPk?: number;
	formularyHeaderIdFk?: number;
	beginDate?: string;
	endDate?: string;
	currentFlag?: string;
	formularyId?: string;
	ndc?: string;
	formularyStatus?: string;
	chapterId?: string;
	chapterDescription?: string;
	drugBrandName?: string;
	skeyHicl?: string;
	drugLabelName?: string;
	routeDescription?: string;
	strengthDescription?: string;
	doseDescription?: string;
	substitutionInd?: string;
	mfgName?: string;
	stcDescription?: string;
	gtcDescription?: string;
	drugMultiSrcCode?: string;
	gpi2Code?: string;
	gpiCode?: string;
	drugIdType?: string;
	genericName?: string;
	brandGenericCode?: string;
	brandNameTypeCode?: string;
	maintDrugInd?: string;
	meddStatusCode?: string;
	spcltDrugInd?: string;
	rteAdminCode?: string;
	otcDrugInd?: string;
	frmlyNdcEffDate?: string;
	frmlyNdcExprnDate?: string;
	srcFrmlyInd?: string;
	srcFrmlyPdlCode?: string;
	frmlyPdlDescription?: string;
	monyCode?: string;
	monyDescription?: string;
	tierRaw?: string;
	tierGateway?: string;
	srcFrmlyDrugTierCode?: string;
	frmlyDrugTierDescription?: string;
	frmlyCmplcCode?: string;
	frmlyCmplcDescription?: string;
	frmlyListId?: string;
	frmlyListCode?: string;
	frmlyDrugSsTierRnkNbr?: string;
	frmlyDrugPrfrTierRelNbr?: string;
	frmlyDrugTierNbrMapId?: string;
	lastChangeDateTime?: string;
	lastChangeUser?: string;
	quantityLimitInd?: string;
	daysLimitInd?: string;
	fillLimitInd?: string;
	ageLimitInd?: string;
	specialLimitInd?: string;
	genderLimitsInd?: string;
	stepTherapyInd?: string;
	concurrentUseInd?: string;
	alternativeCarrierInd?: string;
	priorAuthorizationInd?: string;
	rxcui?: string;
	sourceIdFk?: number
	formularyHeaderIdFkNavigation?: FormularyHeader;
	constructor(obj: any = {}) {
		this.formularyIdPk = obj.formularyIdPk;
		this.formularyHeaderIdFk = obj.formularyHeaderIdFk;
		this.beginDate = obj.beginDate;
		this.endDate = obj.endDate;
		this.currentFlag = obj.currentFlag;
		this.formularyId = obj.formularyId;
		this.ndc = obj.ndc;
		this.formularyStatus = obj.formularyStatus;
		this.chapterId = obj.chapterId;
		this.chapterDescription = obj.chapterDescription;
		this.drugBrandName = obj.drugBrandName;
		this.skeyHicl = obj.skeyHicl;
		this.drugLabelName = obj.drugLabelName;
		this.routeDescription = obj.routeDescription;
		this.strengthDescription = obj.strengthDescription;
		this.doseDescription = obj.doseDescription;
		this.substitutionInd = obj.substitutionInd;
		this.mfgName = obj.mfgName;
		this.stcDescription = obj.stcDescription;
		this.gtcDescription = obj.gtcDescription;
		this.drugMultiSrcCode = obj.drugMultiSrcCode;
		this.gpi2Code = obj.gpi2Code;
		this.gpiCode = obj.gpiCode;
		this.drugIdType = obj.drugIdType;
		this.genericName = obj.genericName;
		this.brandGenericCode = obj.brandGenericCode;
		this.brandNameTypeCode = obj.brandNameTypeCode;
		this.maintDrugInd = obj.maintDrugInd;
		this.meddStatusCode = obj.meddStatusCode;
		this.spcltDrugInd = obj.spcltDrugInd;
		this.rteAdminCode = obj.rteAdminCode;
		this.otcDrugInd = obj.otcDrugInd;
		this.frmlyNdcEffDate = obj.frmlyNdcEffDate;
		this.frmlyNdcExprnDate = obj.frmlyNdcExprnDate;
		this.srcFrmlyInd = obj.srcFrmlyInd;
		this.srcFrmlyPdlCode = obj.srcFrmlyPdlCode;
		this.frmlyPdlDescription = obj.frmlyPdlDescription;
		this.monyCode = obj.monyCode;
		this.monyDescription = obj.monyDescription;
		this.tierRaw = obj.tierRaw;
		this.tierGateway = obj.tierGateway;
		this.srcFrmlyDrugTierCode = obj.srcFrmlyDrugTierCode;
		this.frmlyDrugTierDescription = obj.frmlyDrugTierDescription;
		this.frmlyCmplcCode = obj.frmlyCmplcCode;
		this.frmlyCmplcDescription = obj.frmlyCmplcDescription;
		this.frmlyListId = obj.frmlyListId;
		this.frmlyListCode = obj.frmlyListCode;
		this.frmlyDrugSsTierRnkNbr = obj.frmlyDrugSsTierRnkNbr;
		this.frmlyDrugPrfrTierRelNbr = obj.frmlyDrugPrfrTierRelNbr;
		this.frmlyDrugTierNbrMapId = obj.frmlyDrugTierNbrMapId;
		this.lastChangeDateTime = obj.lastChangeDateTime;
		this.lastChangeUser = obj.lastChangeUser;
		this.quantityLimitInd = obj.quantityLimitInd;
		this.daysLimitInd = obj.daysLimitInd;
		this.fillLimitInd = obj.fillLimitInd;
		this.ageLimitInd = obj.ageLimitInd;
		this.specialLimitInd = obj.specialLimitInd;
		this.genderLimitsInd = obj.genderLimitsInd;
		this.stepTherapyInd = obj.stepTherapyInd;
		this.concurrentUseInd = obj.concurrentUseInd;
		this.alternativeCarrierInd = obj.alternativeCarrierInd;
		this.priorAuthorizationInd = obj.priorAuthorizationInd;
		this.rxcui = obj.rxcui;
		this.sourceIdFk = obj.sourceIdFk;
		this.formularyHeaderIdFkNavigation = new FormularyHeader(obj.formularyHeaderIdFkNavigation);
	}
}
