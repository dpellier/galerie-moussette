function browseImage() {
	$('#browseImage').click();
}

function uploadImage() {
	$('#uploadForm').submit();
}

function enableMenu() {
	$('.selected').removeClass('selected');
	$('.enabled').removeClass('hidden');
	$('.disabled').addClass('hidden');
	$(this).parent().addClass('selected');
}