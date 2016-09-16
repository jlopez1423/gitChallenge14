//This will be in charge of popping and pushing documents and do even handling:
//1
var Presenter = {
	makeDocument: function(resource){
		if(!Presenter.parser){
			Presenter.parser = new DOMParser();
		}
		var doc = Presenter.parser.parseFromString(resource, "application/xml");
		return doc;
	},
	//2
	modalDialogPresenter: function(xml){
		navigationDocument.presentModal(xml);
	},

	//3
	pushDocument: function(xml){
		navigationDocument.pushDocument(xml);
	}
}