export default function defaultOptions(options = {}) {
	options = {
		site: 'goalrilla',
		cookieExpiration: 1,
		endpoint: process.env.PRICING_ENDPOINT || process.env.GATSBY_PRICING_ENDPOINT || 'production',
		site: process.env.SITE_ID || process.env.GATSBY_SITE_ID,
		...options
	}
	if (options.endpoint === 'production') {
		options.endpoint = 'https://cojn6cbcd7.execute-api.us-east-1.amazonaws.com/production/handler'
	}
	else if (options.endpoint === 'staging' || options.endpoint === 'testing') {
		options.endpoint = 'https://hmfnvefe14.execute-api.us-east-1.amazonaws.com/staging/handler'
	}
	return options
}