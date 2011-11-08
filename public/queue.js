function Queue() {
	this.arrQ = new Array();
	this.idQ = 0;
	
	this.add = function(func){
    	this.arrQ.push(func);
    	if( (this.idQ+1) == this.arrQ.length ) 
    		this.run();
    };
    
    this.run = function(){
    	(this.arrQ[this.idQ])();
    };
    
    this.next = function() {
	    if (++(this.idQ) < this.arrQ.length)
		    this.run();
    };
    
    this.clear = function() {
        this.idQ = 0;
        this.arrQ.splice(0, this.arrQ.length);
    }
};