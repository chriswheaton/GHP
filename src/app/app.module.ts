import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';
import { UserProvider } from '../providers/user/user';
import { ApiProvider } from '../providers/api/api';
import { ClientProvider } from '../providers/client/client';
import { ContractProvider } from '../providers/contract/contract';
import { FormularyProvider } from '../providers/formulary/formulary';
import { ModelingProvider } from '../providers/modeling/modeling';
import { PaymentProvider } from '../providers/payment/payment';
import { LocalProvider } from '../providers/local/local';

import {
	LoginPage,
	ClientIndexPage,
	ContractIndexPage,
	ModelingPage,
	HomePage,
	DebugPage,
	ProcessingIndexPage,
	PaymentsIndexPage,
	ReportsIndexPage,
	ResultsIndexPage
} from '../pages/pages';

import {
	ClientSegmentationComponent,
	FormularyDesignComponent,
	ManufacturerComponent,
	PeriodMaintenanceComponent,
	ContractCalculationsComponent,
	ContractExclusionsComponent,
	ContractFormularyComponent,
	ContractManagementComponent,
	ContractMarketComponent,
	ContractPerformanceComponent,
	ContractProductsComponent,
	ModelingDatasetComponent,
	ModelingInstanceComponent,
	ModelingReportsComponent,
	ModelingResultsComponent,
	ProcessingManagementComponent,
	ProcessingCalculationsComponent,
	ProcessingExclusionsComponent,
	ProcessingProductsComponent,
	ProcessingFormularyComponent,
	ProcessingMarketBasketComponent,
	ProcessingPerformanceComponent,
	ReportsClientSegmentationComponent,
	ReportsContractDetailsComponent,
	ReportsInvoiceComponent,
	ReportsManufacturerComponent,
	CreatePaymentComponent,
	PaymentDistributionComponent,
	PaymentTermsComponent,

	ReceiptManagementComponent,
	ResultsCalculationsComponent,
	ResultsClientSegmentationComponent,
	ResultsContractAuditComponent,
	ResultsDrugFileSearchComponent,
	ResultsFormularyComponent,
	ResultsProductsComponent
} from '../components/components';

@NgModule({
	declarations: [
		MyApp,
		ClientIndexPage,
		ContractIndexPage,
		PaymentsIndexPage,
		ModelingPage,
		HomePage,
		LoginPage,
		DebugPage,
		ResultsIndexPage,
		ReportsIndexPage,
		ProcessingIndexPage,
		ClientSegmentationComponent,
		FormularyDesignComponent,
		ManufacturerComponent,
		PeriodMaintenanceComponent,
		ContractCalculationsComponent,
		ContractExclusionsComponent,
		ContractFormularyComponent,
		ContractManagementComponent,
		ContractMarketComponent,
		ContractPerformanceComponent,
		ContractProductsComponent,
		ModelingDatasetComponent,
		ModelingInstanceComponent,
		ModelingReportsComponent,
		ModelingResultsComponent,
		ProcessingManagementComponent,
		ProcessingCalculationsComponent,
		ProcessingExclusionsComponent,
		ProcessingProductsComponent,
		ProcessingFormularyComponent,
		ProcessingMarketBasketComponent,
		ProcessingPerformanceComponent,
		ReportsClientSegmentationComponent,
		ReportsContractDetailsComponent,
		ReportsInvoiceComponent,
		ReportsManufacturerComponent,
		CreatePaymentComponent,
		PaymentDistributionComponent,
		PaymentTermsComponent,
		ReceiptManagementComponent,
		ResultsCalculationsComponent,
		ResultsClientSegmentationComponent,
		ResultsContractAuditComponent,
		ResultsDrugFileSearchComponent,
		ResultsFormularyComponent,
		ResultsProductsComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		IonicModule.forRoot(MyApp),
		IonicStorageModule.forRoot({
			name: '_GHP'
		})
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		ClientIndexPage,
		ContractIndexPage,
		PaymentsIndexPage,
		ModelingPage,
		HomePage,
		LoginPage,
		DebugPage,
		ResultsIndexPage,
		ReportsIndexPage,
		ProcessingIndexPage,
		ClientSegmentationComponent,
		FormularyDesignComponent,
		ManufacturerComponent,
		PeriodMaintenanceComponent,
		ContractCalculationsComponent,
		ContractExclusionsComponent,
		ContractFormularyComponent,
		ContractManagementComponent,
		ContractMarketComponent,
		ContractPerformanceComponent,
		ContractProductsComponent,
		ModelingDatasetComponent,
		ModelingInstanceComponent,
		ModelingReportsComponent,
		ModelingResultsComponent,
		ReportsClientSegmentationComponent,
		ReportsContractDetailsComponent,
		ReportsInvoiceComponent,
		ReportsManufacturerComponent,
		PaymentDistributionComponent,
		CreatePaymentComponent,
		PaymentTermsComponent,
		ReceiptManagementComponent,
		ResultsCalculationsComponent,
		ResultsClientSegmentationComponent,
		ResultsContractAuditComponent,
		ResultsDrugFileSearchComponent,
		ResultsFormularyComponent,
		ResultsProductsComponent
	],
	providers: [
		StatusBar,
		SplashScreen,
		{provide: ErrorHandler, useClass: IonicErrorHandler},
		UserProvider,
		ApiProvider,
		ClientProvider,
		ContractProvider,
		FormularyProvider,
		ModelingProvider,
		PaymentProvider,
		LocalProvider
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
