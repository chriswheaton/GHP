import { Component, ViewChild } from '@angular/core';
import { Events, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserProvider } from '../providers/user/user';

import {
	HomePage,
	LoginPage,
	DebugPage,
	ClientIndexPage,
	ContractIndexPage,
	ModelingPage,
	PaymentsIndexPage,
	ProcessingIndexPage,
	ReportsIndexPage,
	ResultsIndexPage
} from '../pages/pages';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  user: any;
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any, icon?: string, active?: boolean}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public userProvider: UserProvider,
    private events: Events
  ) {
    this.user = this.userProvider.appUser;
    this.events.subscribe('user-login', ()=>{
		this.user = this.userProvider.appUser;
		this.openPage(this.pages[0]);
    });

    this.events.subscribe('user-logout', ()=>{
      	this.user = this.userProvider.appUser;
		this.nav.setRoot(LoginPage);
    });

    this.initializeApp();

    console.log('User Auth State: ', this.userProvider.userAuthenticated);

    // used for an example of ngFor and navigation
    this.pages = [
		{ title: 'debug', component: DebugPage, icon: 'debug', active: false },
		{ title: 'Client Setup', component: ClientIndexPage, icon: 'person', active: false },
		{ title: 'Contract', component: ContractIndexPage, icon: 'clipboard', active: false },
		{ title: 'Payments', component: PaymentsIndexPage, icon: 'document', active: false },
		{ title: 'Modeling', component: ModelingPage, icon: 'paper-plane', active: false },
		{ title: 'Processing', component: ProcessingIndexPage, icon: 'cog', active: false },
		{ title: 'Reports', component: ReportsIndexPage, icon: 'podium', active: false },
		{ title: 'Results', component: ResultsIndexPage, icon: 'analytics', active: false }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.userProvider.getAppUser().then((user)=>{
		this.user = user;
		if(this.user){
			this.user.authenticated ? this.openPage(this.pages[0]) : this.nav.setRoot(LoginPage);
		} else {
			this.nav.setRoot(LoginPage);
		}

      });

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.pages.forEach((page:any)=>{
      page.active = false;
    });
    page.active = true;
  }

  logout(){
    this.userProvider.logout();
  }
}
