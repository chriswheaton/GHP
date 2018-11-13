import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Headers, Http, RequestOptions, URLSearchParams } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';

const baseUrl = 'https://ghpinternalapidev.azurewebsites.net/api/';
//Client/GetClientMaster

@Injectable()
export class ApiProvider {
	private url: string = baseUrl;
	public loading: any;
	public loaderVisible: boolean = false;
	public loadingDefaults: any = {
		spinner: 'crescent'
	};
	constructor(
		public http: HttpClient,
		public loadingCtrl: LoadingController
	) {

		//#region Client
		//GET     Client/GetClientMaster
		//POST    Client/VwPlanFileManager      param { name:   string }
		//POST    Client/                       param { value:  string }
		//PUT     Client/{id}                   param { id: number(required), value: string }
		//DELETE  Client/{id}                   param { id: number(required) }
		//#endregion

		//#region Contract
		//GET     Contract/GetContractByClientId/{id}   param { id: number(required) }
		//#endregion

		//#region Formulary
		//GET     Formulary/GetFormularyDesignByClientId/{id}   param { id: number(required) }
		//#endregion

		//#region Modeling
		//GET     Modeling
		//POST    Modeling/         param { value:  string }
		//GET     Modeling/{id}     param { id: number(required) }
		//PUT     Modeling/{id}     param { id: number(required), value: string }
		//DELETE  Modeling/{id}     param { id: number(required) }
		//#endregion

		//#region Payment
		//GET     Payment
		//POST    Payment/         param { value:  string }
		//GET     Payment/{id}     param { id: number(required) }
		//PUT     Payment/{id}     param { id: number(required), value: string }
		//DELETE  Payment/{id}     param { id: number(required) }
		//#endregion

		//#region Values
		//GET     Values
		//POST    Values/         param { value:  string }
		//GET     Values/{id}     param { id: number(required) }
		//PUT     Values/{id}     param { id: number(required), value: string }
		//DELETE  Values/{id}     param { id: number(required) }
		//#endregion

		//#region ValuesX
		//GET     ValuesX
		//POST    ValuesX/         param { value:  string }
		//GET     ValuesX/{id}     param { id: number(required) }
		//PUT     ValuesX/{id}     param { id: number(required), value: string }
		//DELETE  ValuesX/{id}     param { id: number(required) }
		//#endregion

  	}

	public showLoader() {
		if (!this.loaderVisible) {
			this.loaderVisible = true;
			this.loading = this.loadingCtrl.create(this.loadingDefaults);
			this.loading.present();
			setTimeout(() => {   //close loader if 5 seconds have elapsed.
				if (this.loaderVisible) { this.hideLoader(); }
			}, 5000);
		}
	}

	public hideLoader() {
		if (this.loaderVisible) {
			this.loading.dismiss().then(() => {
				this.loaderVisible = false;
			}).catch((error) => { });
		}
	}

// setHeader(opt?: RequestOptions) {
//         let options: RequestOptions;
//         if (opt) {
//             options = opt;
//         } else {
//             let headers = new Headers;
//             options = new RequestOptions({
//                 headers: headers
//             });
//         }
//         return options;
// }

	get(endpoint: string, params?: any, options?: HttpParams, url?: string, loader?: boolean) {
		if(loader) this.showLoader();
		const requestOptions = {
		params: new HttpParams()
		};

		//requestOptions.params.set('foo', 'bar');

		options = new HttpParams();
		// options = this.setHeader(options ? options : null);
		// // Support easy query params for GET requests
		// if (params) {
		//     let p = new URLSearchParams();
		//     for (let k in params) {
		//         p.set(k, params[k]);
		//     }
		//     // Set the search field if we have params and don't already have
		//     // a search field set in options.
		//     options.search = !options.search && p || options.search;
		// }
		return this.http.get((url ? url : this.url) + endpoint, requestOptions).map((res) => {
			if (loader) this.hideLoader();
			return res;
		});
	}

	post(endpoint: string, body: any = {}, options?: any, url?: string, loader?: boolean) {
		if (loader) this.showLoader();
		//options = this.setHeader(options ? options : null);
		options = {};
		return this.http.post(url ? url : this.url + endpoint, body).map((res) => {
			if (loader) this.hideLoader();
			return res;
		});
	}

	put(endpoint: string, body: any, options?: any, url?: string, loader?: boolean) {
		if (loader) this.showLoader();
		//options = this.setHeader(options ? options : null);
		return this.http.put(url ? url : this.url + endpoint, body, options).map((res) => {
			if (loader)this.hideLoader();
			return res;
		});
	}

	delete(endpoint: string, options?: any, url?: string, loader?: boolean) {
		if (loader) this.showLoader();
		//options = this.setHeader(options ? options : null);
		return this.http.delete(url ? url : this.url + endpoint, options).map((res) => {
			if (loader) this.hideLoader();
			return res;
		});
	}

  // async patch(endpoint: string, body: any, options?: RequestOptions, url?: string) {
  //     this.showLoader();
  //     options = this.setHeader(options ? options : null);
  //     return this.http.put(url ? url : this.url + endpoint, body, options).map((res) => {
  //         this.hideLoader();
  //         return res;
  //     });
  // }
}
