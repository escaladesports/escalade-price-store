export default {
	setPrices(res, from){
		this.log(`Setting prices from ${from}`)
		this.log(`Setting prices:`, res)
		let changed = false
		for (let i in res) {
			if (from === 'api' && res[i] === false) {
				res[i] = 'undefined'
			}
			if (this.store[i] !== res[i]) {
				changed = true
				this.store[i] = res[i]
				this.triggerChange(i)
			}
		}
		if(changed === true){
			this.triggerChange()
			if (from !== 'cookie') {
				this.setCookie()
			}
		}
	},
	addIds(ids, init){
		ids.forEach(id => {
			id = id.toLowerCase()
			if (!(id in this.store)) {
				this.store[id] = false
			}
		})
		if(!init){
			this.fetch()
		}
	}
}