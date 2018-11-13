import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'create-batch',
  templateUrl: 'create-batch.html'
})
export class CreateBatchComponent {

	constructor(public navParams: NavParams) {
		console.log('Param1', navParams.get('param1'));
		console.log('Param2', navParams.get('param1'));
	}

}
