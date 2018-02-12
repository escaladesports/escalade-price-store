import defaultOptions from './default-options'
import fetch from './fetch'
import events from './events'
import getters from './getters'
import setters from './setters'

class Prices {
	constructor(options) {
		this.options = defaultOptions(options)
		this.store = {}
		this.changeEvents = []
		this.changeEventsOptions = []
		if(options.ids && options.ids.length){
			options.ids.forEach(id => {
				this.store[id] = false
			})
		}
		this.getCookie()
		this.fetch()
	}
}

Prices.prototype = {
	fetch,
	...events,
	...getters,
	...setters,
}

export default Prices