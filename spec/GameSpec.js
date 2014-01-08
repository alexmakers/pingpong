describe("Game", function() {
  var game;

  beforeEach(function() {
    p1 = new Player();
    p2 = new Player();

    game = new Game(p1, p2);
  });

  it('has two players', function() {
    expect(game.player1).toBe(p1);
    expect(game.player2).toBe(p2);
  });

  it('resets after a player reaches 11', function() {
    var times = 11;
    while(times--) {
      game.player1.scorePoint();
    }
    
    expect(p1.score).toEqual(0)
    expect(p2.score).toEqual(0)
  })
});