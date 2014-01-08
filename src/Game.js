function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;

  player1.game = this;
  player2.game = this;
}

Game.prototype._playersSortedByScore = function() {
  return [this.player1, this.player2].sort(function(a, b) { 
      return a.score - b.score;
  })
}

Game.prototype._isDuece = function() {
  return this.trailingPlayer().score >= 10
}

Game.prototype.leadingPlayer = function() {
  return this._playersSortedByScore()[1]
}

Game.prototype.trailingPlayer = function() {
  return this._playersSortedByScore()[0]
}

Game.prototype.checkForWin = function() {
  var normalWin = !this._isDuece() && this.leadingPlayer().score >= 11
  var winOnDuece = this._isDuece() && (this.leadingPlayer().score - this.trailingPlayer().score) >= 2

  if(normalWin || winOnDuece) {
    this.resetScore();
  }
}

Game.prototype.resetScore = function() {
  this.player1.score = 0;
  this.player2.score = 0;
};