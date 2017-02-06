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

Codes.allow({
    insert: function (userId, doc) {
        return true;
    },
});

if (Codes.find().count() === 0) {
    Codes.insert({
        code: '123', price: 100, createdAt: new Date()
    });
    Codes.insert({
        code: '456', price: 1000, createdAt: new Date()
    });
    Codes.insert({
        code: '789', price: 10000, createdAt: new Date()
    });
}