Meteor.publish('wallets', function() {
  return Wallets.find();
})