import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	public wordpressApiUrl = 'http://demo.titaniumtemplates.com/wordpress/?json=1';
	public facebook = {
		apiUrl: 'https://graph.facebook.com/v2.9/',
		appId: '437065976667060',
		scope: ['email']
	};
	public google = {
		apiUrl: 'https://www.googleapis.com/oauth2/v3/',
		appId: '130213721726-iojeiotao5ii6q8kpus8r43pg79g5p9d.apps.googleusercontent.com',
		scope: ['email']
	};
}
