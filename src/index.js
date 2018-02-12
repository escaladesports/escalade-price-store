import Cookie from 'js-cookie'
import format from 'usd-formatter'

import defaultOptions from './default-options'
import fetch from './fetch'
import triggerChange from './trigger-change'

class Prices {
	constructor(ids, options = {}) {
		this.options = defaultOptions(options)
		this.store = {}
		this.changeEvents = []
		this.changeEventsOptions = []
		ids.forEach(id => {
			this.store[id] = false
		})
	}
	addEvent(fn, options){
		options = {
			id: false,
			formatted: true,
			...options
		}
		this.changeEvents.push(fn)
		this.changeEventsOptions.push(options)
	}
	removeEvent() {
		let index = this.changeEvents.indexOf(fn)
		if (index > -1) {
			this.changeEvents.splice(index, 1)
			this.changeEventsOptions.splice(index, 1)
		}
	}
	getPrice(id) {
		id = id.toLowerCase()
		if(id in this.store){
			return this.store[id]
		}
		return false
	}
	getPrices(){
		return {
			...this.store
		}
	}
	getFormattedPrice(id){
		let price = this.getPrice(id)
		if(price){
			return format(price)
		}
		return false
	}
	getFormattedPrices(){
		let prices = {}
		for(let i in this.store){
			prices[i] = format(this.store[i])
		}
		return prices
	}
}

Prices.prototype = {
	fetch,
	triggerChange,
}

export default Prices