describe('Player', function() {
  var player, opponent, game;

  beforeEach(function() {
    player = new Player();
    opponent = new Player();
    game = new Game(player, opponent);
  });

  it('should start at score 0', function() {
    expect(player.score).toEqual(0);
  });

  it('can increase their score', function() {
    player.scorePoint();
    expect(player.score).toEqual(1);
  })

  it('can be tied to a game', function() {
    expect(player.game).toBe(game);
  })
});