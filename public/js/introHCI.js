'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".btn.btn-default.likeBtn").click(sendToAnalystic);
	// your code here
}

function sendToAnalystic(event) {
	event.preventDefault();
	ga('create', 'UA-114609896-1', 'auto');
	ga("send", "event", 'like', 'click');
}