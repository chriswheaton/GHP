import { UtPcaClientId } from './UtPcaClientId';
import { UtPcaContId } from './UtPcaContId';
import { UtPcaPharmaPrsnlId } from './UtPcaPharmaPrsnlId';
export class UtPcaPharmaId {
	pharmaId?: number;
	clientId?: number;
	pharmaName?: string;
	dataDays?: number;
	picoIdqualifier?: string;
	picoIdCode?: string;
	picoIdName?: string;
	zipPassword?: string;
	deletedFlag?: string;
	pharmaNote?: string;
	pharmaCreateDate?: string;
	pharmaUpdateDate?: string;
	lastChangeUser?: string;
	lastChangeDate?: string;
	client?: UtPcaClientId;
	utPcaContId?: Array<UtPcaContId>;
	utPcaPharmaPrsnlId?: Array<UtPcaPharmaPrsnlId>;
	constructor(obj: any = {}) {
		this.pharmaId = obj.pharmaId;
		this.clientId = obj.clientId;
		this.pharmaName = obj.pharmaName;
		this.dataDays = obj.dataDays;
		this.picoIdqualifier = obj.picoIdqualifier;
		this.picoIdCode = obj.picoIdCode;
		this.picoIdName = obj.picoIdName;
		this.zipPassword = obj.zipPassword;
		this.deletedFlag = obj.deletedFlag;
		this.pharmaNote = obj.pharmaNote;
		this.pharmaCreateDate = obj.pharmaCreateDate;
		this.pharmaUpdateDate = obj.pharmaUpdateDate;
		this.lastChangeUser = obj.lastChangeUser;
		this.lastChangeDate = obj.lastChangeDate;
		this.client = new UtPcaClientId(obj.client);
		this.utPcaContId = obj.utPcaContId.map(o => new UtPcaContId(o));
		this.utPcaPharmaPrsnlId = obj.utPcaPharmaPrsnlId.map(o => new UtPcaPharmaPrsnlId(o));
	}
}
