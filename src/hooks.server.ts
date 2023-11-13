import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import { getEnvironmentData } from 'worker_threads';
//import Google from '@auth/core/providers/google';

let githubConfig = {clientId: process.env.GITHUB_PROD_ID, clientSecret: process.env.GITHUB_PROD_SECRET}

if (getEnvironmentData.name === "development") {
	githubConfig = {clientId: process.env.GITHUB_DEV_ID, clientSecret: process.env.GITHUB_DEV_SECRET}
}

export const handle = SvelteKitAuth({
	providers: [
		GitHub(githubConfig),
		//Google({ clientId: GOOGLE_ID, clientSecret: GOOGLE_SECRET })
	]
});
