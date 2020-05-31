var minPathSum = function(grid) {
  if (grid.length === 0) return 0;
  
  const dp = [];
  const rows = grid.length;
  const cols = grid[0].length;

  for (let i = 0; i < rows + 1; i++) {
    dp[i] = [];
    dp[i][0] = Number.MAX_VALUE;
    for (let j = 0; j < cols + 1; j++) {
      if (i === 0) {
        dp[i][j] = Number.MAX_VALUE;
      }
    }
  }

  dp[0][1] = 0;

  for (let i = 1; i < rows + 1; i++) {
    for (let j = 1; j < cols + 1; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i - 1][j - 1];
    }
  }

  return dp[rows][cols];
};
