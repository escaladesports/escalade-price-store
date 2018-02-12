import format from 'usd-formatter'

export default {
	getPrice(id) {
		id = id.toLowerCase()
		if (id in this.store) {
			return this.store[id]
		}
		return false
	},
	getPrices() {
		return {
			...this.store
		}
	},
	getFormattedPrice(id) {
		let price = this.getPrice(id)
		if (price) {
			return format(price)
		}
		return false
	},
	getFormattedPrices() {
		let prices = {}
		for (let i in this.store) {
			prices[i] = format(this.store[i])
		}
		return prices
	}
}