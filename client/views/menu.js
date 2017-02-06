Template.menu.events({
    'click a.logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
});