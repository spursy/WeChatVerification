var utility = {
    getSecond: function (timestamp) {
        var timestamp = timestamp || new Date();
        return parseInt(new Date(timestamp).getTime / 100);
    }
};

module.exports = utility;