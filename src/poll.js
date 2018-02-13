export default function(){
	if(!this.options.pollInterval) return this
	this.log(`Starting poll interval...`)
	setInterval(() => {
		this.log(`Polling from interval...`)
			.fetch()
	}, this.options.pollInterval)
	return this
}