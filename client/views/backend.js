Template.users.helpers({
    users: function () {
        const getUsers = Meteor.users.find().fetch();
        getUsers.forEach(function (row) {
            // var emails = {
            //     email: row.emails[0].address,
            // };
            emails.push(row.emails[0].address);
            console.log(emails);
        });
        // console.log(emails);
        // return emails;
    }
});