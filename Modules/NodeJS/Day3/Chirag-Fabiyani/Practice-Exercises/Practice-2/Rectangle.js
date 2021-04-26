module.exports = function(length,width){
    this.length = length;
    this.width = width;
    this.Area = function(){
        return this.length*this.width;
    }
    this.Perimeter = function(){
        return 2*(this.length+this.width);
    }
}