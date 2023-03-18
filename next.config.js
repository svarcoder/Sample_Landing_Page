/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["www.staging.essentiallysports.com", "media.cnn.com"],
	},
	async rewrites() {
		return [
			{
				source: "/feed",
				destination: "https://www.essentiallysports.com/feed/",
			},
		];
	},
};

module.exports = nextConfig;
