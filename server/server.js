Wallets.allow({
    insert: function (userId, doc) {
        return true;
    },
    update: function (userId, doc) {
        return true;
    }
});

Transactions.allow({
    insert: function (userId, doc) {
        return true;
    },
});

Refills.allow({
    insert: function (userId, doc) {
        return true;
    },
});