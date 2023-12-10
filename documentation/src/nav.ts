export const sections: Section[] = [
	{
		title: "Start here",
		pages: [
			["Getting-started", "/getting-started"],
			["Database", "/database"],
			["Upgrade to v3", "/upgrade-v3"]
		]
	},
	{
		title: "Tutorials",
		pages: [
			["GitHub OAuth", "/tutorials/github-oauth"],
			["Username and password", "/tutorials/username-and-password"]
		]
	},
	{
		title: "Basics",
		pages: [
			["Sessions", "/basics/sessions"],
			["Users", "/basics/users"],
			["Configuration", "/basics/configuration"],
			["Troubleshooting", "/basics/help"]
		]
	},
	{
		title: "Guides",
		pages: [
			["Validate session cookies", "/guides/validate-session-cookies"],
			["Validate bearer tokens", "/guides/validate-bearer-tokens"],
			["OAuth", "/guides/oauth"],
			["Email and password", "/guides/email-and-password"],
			["Passkeys", "/guides/passkeys"],
			["Improving sessions", "/guides/improving-sessions"]
		]
	},
	{
		title: "API reference",
		pages: [["lucia", "/reference/main", "code"]]
	},
	{
		title: "Community",
		pages: [
			["Discord", "https://discord.com/invite/PwrK3kpVR3"],
			["GitHub", "https://github.com/lucia-auth/lucia"],
			["Twitter", "https://twitter.com/lucia-auth"]
		]
	}
];

export interface Section {
	title: string;
	pages: Page[];
}

export type Page = [title: string, href: string, format?: "code"];