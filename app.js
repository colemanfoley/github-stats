var baseURL = 'https://api.github.com/search';
var repoSearchURL = baseURL + '/repositories?';


var currentDate = new Date();
var popularRepoURL = repoSearchURL + 'q=created:>' + moment().subtract(30, 'days').toISOString() + '&sort=stars&order=desc';

$(document).ready( function() {
	$.get( popularRepoURL, function (data) {
		console.log(data);
		_.each(data.items.slice(0,10), function(item, index) {
			var itemContainer = $('<div class="item-container">');
			itemContainer.append('<span class="title">' + (index + 1) + '.' + item.name + '</span>');
			itemContainer.append('<span class="stars">Stars: ' + item.stargazers_count + '</span>');
			$('#repo-list').append(itemContainer);
		})
	});
} );
