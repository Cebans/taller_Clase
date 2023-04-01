function searchTextBtn() {
	var searchText = document.getElementById("searchText").value;
	var fullText = document.getElementById("fullText").value;
	
	var highlightedText = fullText.replace(/<span class="highlight">/gi, "").replace(/<\/span>/gi, "");

	var regex = new RegExp(searchTextBtn, "gi");
	highlightedText = highlightedText.replace(regex, function(match) {
		return "<span class='highlight'>" + match + "</span>";
	});

	document.getElementById("fullText").innerHTML = highlightedText;
}
