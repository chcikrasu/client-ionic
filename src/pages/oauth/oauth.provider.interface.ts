import { OAuthProfile } from './models/oauth-profile.model';
export interface IOathProvider {
	login(): Promise<any>;
	getProfile(accessToken: string): Promise<OAuthProfile>;
}