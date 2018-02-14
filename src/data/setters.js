export default {
	setData(res, from){
		this.log(`Setting data from ${from}`)
		this.log(`Setting data:`, res)
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
		let found = false
		ids.forEach(id => {
			id = id.toLowerCase()
			if (!(id in this.store)) {
				found = true
				this.store[id] = false
			}
		})
		if(!init && found === true){
			this.fetch()
		}
	}
}