export default {
	setPrices(res, fromCookie){
		console.log(res)
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
	}
}