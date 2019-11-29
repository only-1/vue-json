
const path =require('path')
const resolve = dir=>path.join(_direname,dir)
const BASE_URL = process.env.NODE_ENV === 'prodution'? '/iview-admin/':'/'
module.exports = {
	lintOnSave:false,
	baseUrl:BASE_URL,
	chinwebpack:config=>{
		config.resolve.alias
		.set('@',resolvee('src'))
	}

}
