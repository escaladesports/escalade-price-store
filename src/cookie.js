import {
	set as SetCookie,
	get as GetCookie,
} from 'js-cookie'

export default {
	setCookie(){
		SetCookie(`escaPricing-${this.options.site}`, JSON.stringify(this.store), {
			expires: this.options.cookieExpiration
		})
	},
	getCookie(){
		let data = GetCookie(`escaPricing-${this.options.site}`)
		if(data){
			try {
				data = JSON.parse(data)
			}
			catch(err){
				console.error(err)
			}
			if(data){
				this.setPrices(data, true)
			}
		}
	}
}