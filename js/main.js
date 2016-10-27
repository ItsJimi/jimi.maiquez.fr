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

var projects = null
var loop = null
var i = 0

var prev = () => {
	if (projects) {
		clearInterval(loop)
		if (i == 0)
			i = projects.length
		i--
		document.getElementById('project_link').setAttribute("href", projects[i].html_url)
		document.getElementById('project_name').innerHTML = projects[i].name
		document.getElementById('project_description').innerHTML = projects[i].description
		document.getElementById('project_language').innerHTML = projects[i].language
	}
}

var next = () => {
	if (projects) {
		clearInterval(loop)
		if (i == projects.length - 1)
			i = -1
		i++
		document.getElementById('project_link').setAttribute("href", projects[i].html_url)
		document.getElementById('project_name').innerHTML = projects[i].name
		document.getElementById('project_description').innerHTML = projects[i].description
		document.getElementById('project_language').innerHTML = projects[i].language
	}
}

var ready = (cb) => {
	if (document.readyState != 'loading')
		cb()
	else
		document.addEventListener('DOMContentLoaded', cb)
}

ready(() => {
	getRepos(link).then((repos) => {
		projects = repos
		document.getElementById('project_link').setAttribute("href", projects[0].html_url)
		document.getElementById('project_name').innerHTML = projects[0].name
		document.getElementById('project_description').innerHTML = projects[0].description
		document.getElementById('project_language').innerHTML = projects[0].language
		loop = window.setInterval(() => {
			if (i == projects.length - 1)
				i = -1
			i++
			document.getElementById('project_link').setAttribute("href", projects[i].html_url)
			document.getElementById('project_name').innerHTML = projects[i].name
			document.getElementById('project_description').innerHTML = projects[i].description
			document.getElementById('project_language').innerHTML = projects[i].language
		}, 5000)
	}).catch((err) => {
		console.log(err)
		document.getElementById('project_name').innerHTML = '...'
	})
})
