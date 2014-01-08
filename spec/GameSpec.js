describe('Game', function() {
  var game, player1, player2;

  beforeEach(function() {
    player1 = new Player();
    player2 = new Player();
    game = new Game(player1, player2);
  });

  it('has 2 players', function() {
    expect(game.player1).toBe(player1)
    expect(game.player2).toBe(player2)
  });

  it('resets the score at 11 points', function() {
    var i = 11
    while(i--) {
      player1.scorePoint();
    }

    expect(player1.score).toEqual(0);
    expect(player2.score).toEqual(0);
  })
});