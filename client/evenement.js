Template.Evenement.onCreated(function(){
	this.editMode = new ReactiveVar(false);
	//	this.editMode = new ReactiveVar();
	// this.editMode.set(false);
});

Template.Evenement.helpers({
	updateEvenementId: function() {
		return this._id;
	},
	editMode: function(){
		return Template.instance().editMode.get();
	}
});

Template.Evenement.events({
	'click .toggle-menu': function(){
		Meteor.call('toggleMenuItem', this._id, this.inMenu);
	},
	'click .fa-trash': function () {
		Meteor.call('deleteEvenement', this._id);
	},
	'click .fa-pencil': function (event, template) {
		template.editMode.set(!template.editMode.get());
	}
});