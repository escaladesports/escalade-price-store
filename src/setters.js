export default {
	setPrices(res, fromCookie){
		let changed = false
		for(let i in res){
			if (this.store[i] !== res[i]) {
				changed = true
				this.store[i] = res[i]
				this.triggerChange(i)
			}
		}
		if(changed === true){
			this.triggerChange()
			if (!fromCookie) {
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