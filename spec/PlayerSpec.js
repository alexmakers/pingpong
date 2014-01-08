describe("Player", function() {
  var player;

  beforeEach(function() {
    player = new Player();
    p2 = new Player();

    game = new Game(player, p2);
  });

  it('starts with a score of 0', function() {
    expect(player.score).toEqual(0);
  });

  it('can increase their score', function() {
    player.scorePoint();
    expect(player.score).toEqual(1);
  })
});