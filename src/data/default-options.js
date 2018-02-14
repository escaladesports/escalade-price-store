export default function defaultOptions(options = {}) {
	let envEndpoint
	if(options.envEndpoints){
		options.envEndpoints.forEach(prop => {
			if(process.env[prop]){
				envEndpoint = process.env[prop]
			}
		})
	}
	options = {
		cookies: true,
		cookieExpiration: 1,
		pollInterval: 15 * 60 * 1000, // Minutes
		endpoint: envEndpoint || 'production',
		site: process.env.SITE_ID || process.env.GATSBY_SITE_ID,
		...options
	}
	if (options.endpoint === 'production') {
		options.endpoint = options.productionEndpoint
	}
	else if (options.endpoint === 'staging' || options.endpoint === 'testing') {
		options.endpoint = options.stagingEndpoint
	}
	return options
}