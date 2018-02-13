import fetch from 'fetch-retry'

export default async function(ids){
	if (!ids) ids = Object.keys(this.store)
	else if(typeof ids === 'string') ids = [ ids ]
	if(!ids.length) return
	// Fetch prices
	let res
	try {
		this.log(`Fetching prices from ${this.options.endpoint}...`)
		res = await fetch(this.options.endpoint, {
			method: 'POST',
			body: JSON.stringify({
				site: this.options.site,
				ids,
			})
		})
		res = await res.json()
	}
	catch(err){
		console.error(err)
		return
	}
	this.log(`Fetched prices:`, res)
	this.setPrices(res, 'api')
}