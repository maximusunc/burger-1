$(function() {
	$("#submit").on('click', function(event) {
		event.preventDefault();
		var newBurger = {
			name: $('#newBurger').val().trim(),
		};
		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger
		}).then(
			function() {
				console.log("new burger named " + newBurger + " added");
				location.reload();
		})
	});
	$(".devourBurger").on('click', function(event) {
		var id = $(this).data('id');
		$.ajax('/api/burgers/' + id, {
			type: "PUT"
		}).then(function() {
			console.log("devoured ", name);
		});
	})


})