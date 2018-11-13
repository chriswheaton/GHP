import { UtPcaPharmaId } from './UtPcaPharmaId';
export class UtPcaPharmaPrsnlId {
	pharmaPrsnlId?: number;
	pharmaId?: number;
	roleId?: number;
	name?: string;
	title?: string;
	email?: string;
	address1?: string;
	address2?: string;
	address3?: string;
	address4?: string;
	fax?: string;
	phone?: string;
	dataSubm?: number;
	cc?: number;
	note?: string;
	deletedFlag?: number;
	shortName?: string;
	personTitle?: string;
	pharmaPrsnlCreateDate?: string;
	pharmaPrsnlUpdateDate?: string;
	pharma?: UtPcaPharmaId;
	constructor(obj: any = {}) {
		this.pharmaPrsnlId = obj.pharmaPrsnlId;
		this.pharmaId = obj.pharmaId;
		this.roleId = obj.roleId;
		this.name = obj.name;
		this.title = obj.title;
		this.email = obj.email;
		this.address1 = obj.address1;
		this.address2 = obj.address2;
		this.address3 = obj.address3;
		this.address4 = obj.address4;
		this.fax = obj.fax;
		this.phone = obj.phone;
		this.dataSubm = obj.dataSubm;
		this.cc = obj.cc;
		this.note = obj.note;
		this.deletedFlag = obj.deletedFlag;
		this.shortName = obj.shortName;
		this.personTitle = obj.personTitle;
		this.pharmaPrsnlCreateDate = obj.pharmaPrsnlCreateDate;
		this.pharmaPrsnlUpdateDate = obj.pharmaPrsnlUpdateDate;
		this.pharma = new UtPcaPharmaId(obj.pharma);
	}
}
