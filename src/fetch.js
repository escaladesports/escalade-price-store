import fetch from 'fetch-retry'

export default async function(ids){
	if (!ids) ids = Object.keys(this.store)
	else if(typeof ids === 'string') ids = [ ids ]
	if(!ids.length) return
	// Fetch prices
	let res
	try {
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
		return console.error(err)
	}

	for(let i in res){
		if(this.store[i] !== res[i]){
			this.store[i] = res[i]
		}
	}

}