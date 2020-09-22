module.exports = {

    evolution: function (a, b) {
        if (a == b) {
            return a;
        }
        return (b - a) / a * 100;
    } 
}