Template.wallet.events({
    'click button': function (event) {
        event.preventDefault();
        Wallets.insert({
            walletId: CryptoJS.MD5(Meteor.userId()).toString(),
            amount: 0,
            userId: Meteor.userId()
        });
    }
});

Template.wallet.helpers({
    wallet: function () {
        const getWallet = Wallets.findOne({ userId: Meteor.userId() });
        Session.set('walletId', getWallet.walletId);
        return getWallet;
    }
});

Template.history.helpers({
    sent: function () {
        return Transactions.find({ userId: Meteor.userId() }, { sort: { _id: -1 } });
    },
    income: function () {
        return Transactions.find({ walletId: Session.get('walletId') }, { sort: { _id: -1 } });
    }
});

Template.tranfer.events({
    'submit': function (event, form) {
        event.preventDefault();
        const getWallet = event.target.walletAddress.value;
        const getAmount = Number(event.target.amount.value);
        const getWalletTo = Wallets.findOne({ walletId: getWallet });
        if (getWalletTo) {
            const getWalletAmount = Wallets.findOne({ userId: Meteor.userId() });
            if (getWalletAmount.amount >= getAmount && getAmount <= getWalletAmount.amount) {
                Transactions.insert({
                    walletId: getWallet,
                    amount: getAmount,
                    userId: Meteor.userId(),
                    createdAt: new Date(),
                });
                const sum = getWalletAmount.amount - getAmount;
                Wallets.update(getWalletAmount._id, { $set: { amount: sum } });
                const total = getWalletTo.amount + getAmount;
                Wallets.update(getWalletTo._id, { $set: { amount: total } });
                form.find("form").reset();
                alert("ทำรายการสำเร็จแล้ว");
            } else {
                alert("ยอดเงินไม่พอ!");
            }
        } else {
            alert("ไม่มี Wallet Address ที่คุณต้องการจะโอน!");
        }
    },
});

Template.refill.events({
    'submit': function (event, form) {
        event.preventDefault();
        const getCode = event.target.code.value;
        const check = Codes.find({ code: getCode });
        if (check) {
            Refills.insert({
                code: getCode,
                userId: Meteor.userId(),
                createdAt: new Date(),
            });
            const getCodes = Codes.findOne({ code: getCode });
            const getWallet = Wallets.findOne({ userId: Meteor.userId() });
            const sum = getCodes.price + getWallet.amount;
            Wallets.update(getWallet._id, { $set: { amount: sum } });
            form.find("form").reset();
            alert("ทำรายการสำเร็จแล้ว");
        } else {
            alert("ไม่พบรหัส!");
        }
    },
});