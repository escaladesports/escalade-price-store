import defaultOptions from './default-options'
import log from './log'
import fetch from './fetch'
import events from './events'
import getters from './getters'
import setters from './setters'
import cookie from './cookie'
import poll from './poll'

class PriceStore {
	constructor(options) {
		this.options = defaultOptions(options)
		this.log(`Constructing store...`)
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
		this.poll()
		return this
	}
}

PriceStore.prototype = {
	fetch,
	log,
	poll,
	...events,
	...getters,
	...setters,
	...cookie,
}

export default PriceStore