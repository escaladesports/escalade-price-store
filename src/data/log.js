export default function(){
	if(this.options.verbose){
		console.log(`${this.constructor.name}:`, ...arguments)
	}
	return this
}