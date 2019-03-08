Template.EvenementSingle.onCreated(function(){
	var self = this;
	self.autorun(function() {
		var id = FlowRouter.getParam('id');
		self.subscribe('SingleEvenement', id);
	});
});

Template.EvenementSingle.helpers({
	recipe: ()=> {
		var id = FlowRouter.getParam('id');
		return Evenements.findOne({_id: id});
	}
});