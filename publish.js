Meteor.publish('evenements', function(){
	return Evenements.find({author: this.userId});
});

Meteor.publish('SingleEvenement', function(id){
	check(id, String);
	return Evenements.find({_id: id});
});