import {
	set as SetCookie,
	get as GetCookie,
} from 'js-cookie'

export default {
	setCookie(){
		if(!this.options.cookies) return this
		this.log(`Setting cookie: ${this.options.cookiePrefix}-${this.options.site}`)
		SetCookie(`${this.options.cookiePrefix}-${this.options.site}`, JSON.stringify(this.store), {
			expires: this.options.cookieExpiration
		})
		return this
	},
	getCookie(){
		if(!this.options.cookies) return this
		let data = GetCookie(`${this.options.cookiePrefix}-${this.options.site}`)
		if(data){
			try {
				data = JSON.parse(data)
			}
			catch(err){
				console.error(err)
			}
			if(data){
				this.setData(data, 'cookie')
				this.log(`Loaded data from cookie:`, `${this.options.cookiePrefix}-${this.options.site}`, data)
			}
		}
		return this
	}
}