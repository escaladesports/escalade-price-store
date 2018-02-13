import defaultOptions from './default-options'
import fetch from './fetch'
import events from './events'
import getters from './getters'
import setters from './setters'
import cookie from './cookie'

class PriceStore {
	constructor(options) {
		this.options = defaultOptions(options)
		if(!this.options.site){
			return console.log(`'site' option must be supplied`)
		}
		this.store = {}
		this.changeEvents = []
		this.changeEventsOptions = []
		if(options.ids && options.ids.length){
			this.addIds(options.ids, true)
		}
		this.getCookie()
		this.fetch()
		return this
	}
}

PriceStore.prototype = {
	fetch,
	...events,
	...getters,
	...setters,
	...cookie,
}

export default PriceStore