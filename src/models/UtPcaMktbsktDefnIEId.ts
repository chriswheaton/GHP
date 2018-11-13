import { UtPcaMktbsktDefnId } from './UtPcaMktbsktDefnId';
export class UtPcaMktbsktDefnIEId {
	mktbsktDefnIEId?: number;
	mktbsktDefnIENm?: string;
	utPcaMktbsktDefnId?: Array<UtPcaMktbsktDefnId>;
	constructor(obj: any = {}) {
		this.mktbsktDefnIEId = obj.mktbsktDefnIEId;
		this.mktbsktDefnIENm = obj.mktbsktDefnIENm;
		this.utPcaMktbsktDefnId = obj.utPcaMktbsktDefnId.map(o => new UtPcaMktbsktDefnId(o));
	}
}
