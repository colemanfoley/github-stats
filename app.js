var baseURL = 'https://api.github.com/search';
var repoSearchURL = baseURL + '/repositories?';


var currentDate = new Date();
var popularRepoURL = repoSearchURL + 'q=created:>' + moment().subtract(30, 'days').toISOString() + '&sort=stars&order=desc';

$(document).ready( function() {
	$.get( popularRepoURL, function (data) {
		console.log(data);
		_.each(data.items.slice(0,10), function(item) {
			var itemContainer = $('<div class="container">');
			itemContainer.append('<span class="title">' + item.name + '</span>');
			itemContainer.append('<span class="stars">Stars: ' + item.stargazers_count + '</span>');
			$('#repo-list').append(itemContainer);
		})
	});
} );
