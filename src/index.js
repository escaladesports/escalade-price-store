import Cookie from 'js-cookie'

import defaultOptions from './default-options'
import fetch from './fetch'
import events from './events'
import getters from './getters'

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
}

Prices.prototype = {
	fetch,
	...events,
	...getters,
}

export default Prices