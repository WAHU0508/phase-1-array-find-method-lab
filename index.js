const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    { year: "2012", result: "N/A"},
    { year: "2011", result: "L"},
    { year: "2010", result: "W"}
  ]
  function superbowlWin(array) {
        const winningYear = array.find(element => element.result === 'W')
        if (winningYear) {
            return winningYear.year
        }
        else {
            return undefined
        }
  }
