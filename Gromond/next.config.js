/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	cacheComponents: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
			{
				protocol: "https",
				hostname: "picsum.photos",
			},
		],
	},
	env: {
		NEXT_PUBLIC_DEFAULT_CHANNEL: process.env.NEXT_PUBLIC_DEFAULT_CHANNEL,
	},
};

import withNextIntl from "next-intl/plugin";

export default withNextIntl("./src/i18n/request.ts")(nextConfig);
