describe('The greetCounter function',function(){
  it('should increment the counter when a user is greeted for the first time',function(){
    var greeterObj = GreetingsFactory();
    greeterObj.greet('Mike','Afrikaans');
    assert.equal(greeterObj.getCountTotal(),1);
  });
  it('should increment the counter when multiple users have been greeted',function(){
    var greeterObj = GreetingsFactory();
    greeterObj.greet('Mike','Afrikaans');
    greeterObj.greet('Andrew','isiXhosa');
    greeterObj.greet('Greg','Afrikaans');
    assert.equal(greeterObj.getCountTotal(),3);
  });
  it('should not increment the counter when the same users have been greeted',function(){
    var greeterObj = GreetingsFactory();
    greeterObj.greet('Mike','Afrikaans');
    greeterObj.greet('Mike','Afrikaans');
    greeterObj.greet('Andrew','isiXhosa');
    greeterObj.greet('Greg','Afrikaans');
    greeterObj.greet('Andrew','isiXhosa');
    greeterObj.greet('Greg','Afrikaans');
    assert.equal(greeterObj.getCountTotal(),3);
  });
});
