var userData = [
{
	id:1,
	name: 'Takuya Tajima',
	Password: '123456'
},{
	id:2,
	name: 'Yohei Noda',
	Password: '123456'
}
]

var getUsers = function(callback){
	setTimeoout(function(){
		callback(null, userData)
	},1000)
}

/*var getUser = function(userId, callback){
	setTimeout(function(){
		var filteredUsers = userData.filter(function(user){
			return user.id === parseInt(userId, 10)
		})
		callback(null, filteredUsers && filteredUsers[0])
	},1000)
}*/

var UserList = {
	template: '#user-list',
	data: function(){
		return{
			loading: false,
			users: function(){
				return[]
			},
			error: null
		}
	},

	created: function (){
		this.fetchData()
	},

	watch: {
		'$route': 'fetchData'
	},

	methods: {
		fetchData: function(){
			this.loading = true
			getUsers((function(err,users){
				this.loading = false
				if(err){
					this.error = err.toString()
				}else{
					this.users = users
				}
			}).bind(this))
		}
	}
}