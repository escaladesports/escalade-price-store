import {
	set as SetCookie,
	get as GetCookie,
} from 'js-cookie'

export default {
	setCookie(){
		if(!this.options.cookies) return this
		this.log(`Setting cookie: escaPricing-${this.options.site}`)
		SetCookie(`escaPricing-${this.options.site}`, JSON.stringify(this.store), {
			expires: this.options.cookieExpiration
		})
		return this
	},
	getCookie(){
		if(!this.options.cookies) return this
		let data = GetCookie(`escaPricing-${this.options.site}`)
		if(data){
			try {
				data = JSON.parse(data)
			}
			catch(err){
				console.error(err)
			}
			if(data){
				this.setPrices(data, 'cookie')
				this.log(`Loaded prices from cookie:`, `escaPricing-${this.options.site}`, data)
			}
		}
		return this
	}
}