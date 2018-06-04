describe('The greetings Function',function(){
  it('should greet you by your name',function(){
    var greetingsObject = GreetingsFactory();

    greetingsObject.greet('Michael','English');

    assert.equal(greetingsObject.greet('Michael','English'),'Hello, Michael');
  });
  it('should greet you by your name in multiple languages',function(){
    var greetingsObject = GreetingsFactory();

    greetingsObject.greet('Michael','English');
    greetingsObject.greet('Michael','Afrikaans');
    greetingsObject.greet('Michael','isiXhosa');

    assert.equal(greetingsObject.greet('Michael','English'),'Hello, Michael');
    assert.equal(greetingsObject.greet('Michael','Afrikaans'),'Goeie dag, Michael');
    assert.equal(greetingsObject.greet('Michael','isiXhosa'),'Molo, Michael');
  });
});
