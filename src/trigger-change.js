export default function triggerChange(id = false) {
	this.log(`Triggering any changes...`)
	this.changeEventsOptions.forEach((opt, key) => {
		if (id !== false) {
			id = id.toLowerCase()
			if (opt.id === id) {
				if (opt.formatted) {
					this.log(`Triggering change for ${id}: formatted price`)
					this.changeEvents[key](this.getFormattedPrice(id))
				}
				else {
					this.log(`Triggering change for ${id}: unformatted price`)
					this.changeEvents[key](this.getPrice(id))
				}
			}
		}
		else if (opt.id === false) {
			if (opt.formatted) {
				this.log(`Triggering change for all: formatted price`)
				this.changeEvents[key](this.getFormattedPrices())
			}
			else {
				this.log(`Triggering change for all: unformatted price`)
				this.changeEvents[key](this.getPrices())
			}
		}
	})
}