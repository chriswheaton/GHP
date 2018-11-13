import { UtPcaResultMaster } from './UtPcaResultMaster';
export class UtPcaCalcRsltId {
	calcRsltId?: number;
	contId?: number;
	calcId?: number;
	calcGrpId1?: string;
	calcGrpId2?: string;
	calcGrpId3?: string;
	calcOrigin?: string;
	clientId?: number;
	runId?: number;
	formCalcDis?: string;
	formCalcTf?: string;
	formDefnRateVal?: number;
	critRateId?: number;
	calcLvlId?: number;
	calcLvl?: string;
	planNm?: string;
	rx?: number;
	qty?: number
	dot?: number;
	ingCst?: number;
	rbtProdSls?: number;
	dispFee?: number;
	copayIns?: number;
	otherCritId?: number;
	otherCramt?: number;
	rxMs?: number;
	qtyMs?: number;
	dotMs?: number;
	ingCstMs?: number;
	critRateDefnId?: number;
	critRateDefnRateVal?: number;
	resultRate?: number;
	calcEffecDt?: string;
	calcTermDt?: string;
	ie?: string;
	note?: string;
	crMb1?: number;
	crTyp1?: number;
	crVal1?: number;
	crMb2?: number;
	crTyp2?: number;
	crVal2?: number;
	crMb3?: number;
	crTyp3?: number;
	crVal3?: number;
	crMb4?: number;
	crTyp4?: number;
	crVal4?: number;
	crMb5?: number;
	crTyp5?: number;
	crVal5?: number;
	crMb6?: number;
	crTyp6?: number;
	crVal6?: number;
	crMb7?: number;
	crTyp7?: number;
	crVal7?: number;
	crMb8?: number;
	crTyp8?: number;
	crVal8?: number;
	crRuleTf?: string;
	crRuleResultVal?: number;
	crRuleTermVio?: string;
	crRuleCritRateDefnId?: number;
	formRuleTermVio?: string;
	hpfrmlyId?: number;
	hpdsgnId?: number;
	crRateType?: number;
	formDefnId?: number;
	tierBelowResultRate?: number;
	tierBelowCrVal?: number;
	tierAboveResultRate?: number;
	tierAboveCrVal?: number;
	planId?: number;
	formCalcPositionOutcome?: string;
	utPcaResultMaster?: Array<UtPcaResultMaster>;
	constructor(obj: any = {}) {
		this.calcRsltId = obj.calcRsltId;
		this.contId = obj.contId;
		this.calcId = obj.calcId;
		this.calcGrpId1 = obj.calcGrpId1;
		this.calcGrpId2 = obj.calcGrpId2;
		this.calcGrpId3 = obj.calcGrpId3;
		this.calcOrigin = obj.calcOrigin;
		this.clientId = obj.clientId;
		this.runId = obj.runId;
		this.formCalcDis = obj.formCalcDis;
		this.formCalcTf = obj.formCalcTf;
		this.formDefnRateVal = obj.formDefnRateVal;
		this.critRateId = obj.critRateId;
		this.calcLvlId = obj.calcLvlId;
		this.calcLvl = obj.calcLvl;
		this.planNm = obj.planNm;
		this.rx = obj.rx;
		this.qty = obj.qty;
		this.dot = obj.dot;
		this.ingCst = obj.ingCst;
		this.rbtProdSls = obj.rbtProdSls;
		this.dispFee = obj.dispFee;
		this.copayIns = obj.copayIns;
		this.otherCritId = obj.otherCritId;
		this.otherCramt = obj.otherCramt;
		this.rxMs = obj.rxMs;
		this.qtyMs = obj.qtyMs;
		this.dotMs = obj.dotMs;
		this.ingCstMs = obj.ingCstMs;
		this.critRateDefnId = obj.critRateDefnId;
		this.critRateDefnRateVal = obj.critRateDefnRateVal;
		this.resultRate = obj.resultRate;
		this.calcEffecDt = obj.calcEffecDt;
		this.calcTermDt = obj.calcTermDt;
		this.ie = obj.ie;
		this.note = obj.note;
		this.crMb1 = obj.crMb1;
		this.crTyp1 = obj.crTyp1;
		this.crVal1 = obj.crVal1;
		this.crMb2 = obj.crMb2;
		this.crTyp2 = obj.crTyp2;
		this.crVal2 = obj.crVal2;
		this.crMb3 = obj.crMb3;
		this.crTyp3 = obj.crTyp3;
		this.crVal3 = obj.crVal3;
		this.crMb4 = obj.crMb4;
		this.crTyp4 = obj.crTyp4;
		this.crVal4 = obj.crVal4;
		this.crMb5 = obj.crMb5;
		this.crTyp5 = obj.crTyp5;
		this.crVal5 = obj.crVal5;
		this.crMb6 = obj.crMb6;
		this.crTyp6 = obj.crTyp6;
		this.crVal6 = obj.crVal6;
		this.crMb7 = obj.crMb7;
		this.crTyp7 = obj.crTyp7;
		this.crVal7 = obj.crVal7;
		this.crMb8 = obj.crMb8;
		this.crTyp8 = obj.crTyp8;
		this.crVal8 = obj.crVal8;
		this.crRuleTf = obj.crRuleTf;
		this.crRuleResultVal = obj.crRuleResultVal;
		this.crRuleTermVio = obj.crRuleTermVio;
		this.crRuleCritRateDefnId = obj.crRuleCritRateDefnId;
		this.formRuleTermVio = obj.formRuleTermVio;
		this.hpfrmlyId = obj.hpfrmlyId;
		this.hpdsgnId = obj.hpdsgnId;
		this.crRateType = obj.crRateType;
		this.formDefnId = obj.formDefnId;
		this.tierBelowResultRate = obj.tierBelowResultRate;
		this.tierBelowCrVal = obj.tierBelowCrVal;
		this.tierAboveResultRate = obj.tierAboveResultRate;
		this.tierAboveCrVal = obj.tierAboveCrVal;
		this.planId = obj.planId;
		this.formCalcPositionOutcome = obj.formCalcPositionOutcome;
		this.utPcaResultMaster = obj.utPcaResultMaster.map(o => new UtPcaResultMaster(o));
	}
}
