import format from 'usd-formatter'

formatPrice(price){
	if (price === 'undefined') {
		return 'undefined'
	}
	return format(price)
}

export default {
	getPrice(id) {
		id = id.toLowerCase()
		if (id in this.store) {
			return this.store[id]
		}
	},
	getPrices() {
		return {
			...this.store
		}
	},
	getFormattedPrice(id) {
		let price = this.getPrice(id)
		if (price) {
			return formatPrice(price)
		}
	},
	getFormattedPrices() {
		let prices = {}
		for (let i in this.store) {
			if (this.store[i]) {
				prices[i] = formatPrice(this.store[i])
			}
		}
		return prices
	}
}