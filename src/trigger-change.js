export default function triggerChange(id = false){
	this.changeEventsOptions.forEach((opt, key) => {
		if (id !== false) {
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