describe('The firstCap function',function(){
	it('should captilise the first letter of your name',function(){
		var greetCap = GreetingsFactory();
		assert.equal(greetCap.greet(greetCap.firstCap('mike'),'English'),'Hello, Mike');
		assert.equal(greetCap.greet(greetCap.firstCap('pholisa'),'Afrikaans'),'Goeie dag, Pholisa');
		assert.equal(greetCap.greet(greetCap.firstCap('schtoo'),'isiXhosa'),'Molo, Schtoo');
	
	});
});

