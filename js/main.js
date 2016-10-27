var link = "https://api.github.com/users/ItsJimi/repos"

var getRepos = (url) => {
	return new Promise((resolve, reject) => {
		var request = new XMLHttpRequest()
		request.open('GET', url, true)

		request.onload = function() {
		  if (request.status >= 200 && request.status < 400) {
			  try {
				  var res = JSON.parse(request.responseText)
				  resolve(res)
			  } catch (e) {
				  reject('No JSON')
			  }
		  }
		  else {
		    reject('Wrong server response')
		  }
		};

		request.onerror = function() {
			reject('Error')
		};

		request.send()
    })
}

var ready = (cb) => {
	if (document.readyState != 'loading')
		cb()
	else
		document.addEventListener('DOMContentLoaded', cb)
}

ready(() => {
	getRepos(link).then((repos) => {
		console.log(repos)
		document.getElementById('project').innerHTML = '<a href="' + repos[1].html_url + '" target="_blank">' + repos[1].name + '</a>'
		document.getElementById('project').innerHTML = repos[1].language
	}).catch((err) => {
		console.log(err)
	})
})
