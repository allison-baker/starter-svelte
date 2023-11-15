import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import Google from '@auth/core/providers/google';

let githubConfig = {clientId: process.env.GITHUB_PROD_ID, clientSecret: process.env.GITHUB_PROD_SECRET}
let googleConfig = {clientId: process.env.GOOGLE_PROD_ID, clientSecret: process.env.GOOGLE_PROD_SECRET}

if (process.env.NODE_ENV === "development") {
	githubConfig = {clientId: process.env.GITHUB_DEV_ID, clientSecret: process.env.GITHUB_DEV_SECRET}
	googleConfig = {clientId: process.env.GOOGLE_DEV_ID, clientSecret: process.env.GOOGLE_DEV_SECRET}
}

export const handle = SvelteKitAuth({
	providers: [
		GitHub(githubConfig),
		Google(googleConfig)
	]
});
