
import { Component } from '@angular/core';
import { OAuthService } from './oauth.service';
import { OAuthProfilePage } from "./profile/oauth-profile.page";
import { ServiceProviderAuthPage } from "./service-provider-auth/service-provider-auth";
import { NavController } from 'ionic-angular';

@Component({
	templateUrl: 'oauth-providers.list.html',
	providers: [OAuthService]
})
export class OAuthProvidersListPage {
	private oauthService: OAuthService;
	private nav: NavController;

	constructor(oauthService: OAuthService, nav: NavController) {
		this.oauthService = oauthService;
		this.nav = nav;
	}

	public login(source: string) {
		console.log("In login method");
		this.oauthService.login(source)
			.then(
				() => this.nav.setRoot(OAuthProfilePage),
				error => alert(error)
			);
	}

	public serviceProviderLoginRedirect()
	{
		this.nav.push(ServiceProviderAuthPage);
	}
}