Template.register.events({
    'submit form': function (event) {
        event.preventDefault();
        var emailVar = event.target.registerEmail.value;
        var passwordVar = event.target.registerPassword.value;
        var getid = Accounts.createUser({
            email: emailVar,
            password: passwordVar,
        });
    }
});