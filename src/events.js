export default {
	addEvent(fn, options) {
		options = {
			id: false,
			formatted: true,
			...options
		}
		if(options.id){
			options.id = options.id.toLowerCase()
		}
		if(!(options.id in this.store)) {
			this.fetch(options.id)
		}
		this.changeEvents.push(fn)
		this.changeEventsOptions.push(options)
		return this
	},
	removeEvent() {
		let index = this.changeEvents.indexOf(fn)
		if (index > -1) {
			this.changeEvents.splice(index, 1)
			this.changeEventsOptions.splice(index, 1)
		}
		return this
	},
	triggerChange(id = false) {
		this.changeEventsOptions.forEach((opt, key) => {
			if (id !== false) {
				id = id.toLowerCase()
				if (opt.id === id) {
					if (opt.formatted) {
						this.changeEvents[key](this.getFormattedPrice(id))
					}
					else {
						this.changeEvents[key](this.getPrice(id))
					}
				}
			}
			else if (opt.id === false) {
				if (opt.formatted) {
					this.changeEvents[key](this.getFormattedPrices())
				}
				else {
					this.changeEvents[key](this.getPrices())
				}
			}
		})
	}
}