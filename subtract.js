module.exports = {
    subtract: function(x,y) {

        if(isNaN(y)){
            return "y is null"
        }
        if(isNaN(x)){
            return "x is null"
        }
        return x-y;
    }
}
