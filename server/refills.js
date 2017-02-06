Meteor.publish('refills', function() {
  return Refills.find();
})