import { UtPcaHpbnftId } from './UtPcaHpbnftId';
import { UtPcaHpbnftTypeId } from './UtPcaHpbnftTypeId';
export class UtPcaHpbnftDefnId {
	hpbnftDefnId?: number;
	hpbnftId?: number;
	hpbnftTypeId?: number;
	hpbnftRCopay?: number;
	hpbnftRCoins?: number;
	hpbnftMCopay?: number;
	hpbnftMCoins?: number;
	hpbnftEffecDt?: string;
	hpbnftStampDt?: string;
	hpbnftStampUsr?: string;
	defaultPosition?: boolean;
	hpbnftDefnCreateDate?: string;
	hpbnftDefnUpdateDate?: string;
	hpbnft?: UtPcaHpbnftId;
	hpbnftType?: UtPcaHpbnftTypeId;
	constructor(obj: any = {}) {
		this.hpbnftDefnId = obj.hpbnftDefnId;
		this.hpbnftId = obj.hpbnftId;
		this.hpbnftTypeId = obj.hpbnftTypeId;
		this.hpbnftRCopay = obj.hpbnftRCopay;
		this.hpbnftRCoins = obj.hpbnftRCoins;
		this.hpbnftMCopay = obj.hpbnftMCopay;
		this.hpbnftMCoins = obj.hpbnftMCoins;
		this.hpbnftEffecDt = obj.hpbnftEffecDt;
		this.hpbnftStampDt = obj.hpbnftStampDt;
		this.hpbnftStampUsr = obj.hpbnftStampUsr;
		this.defaultPosition = obj.defaultPosition;
		this.hpbnftDefnCreateDate = obj.hpbnftDefnCreateDate;
		this.hpbnftDefnUpdateDate = obj.hpbnftDefnUpdateDate;
		this.hpbnft = new UtPcaHpbnftId(obj.hpbnft);
		this.hpbnftType = new UtPcaHpbnftTypeId(obj.hpbnftType);
	}
}
