function superbowlWin(array) {
    const winningYear = array.find(element => element.result === 'W')
    if (winningYear) {
        return winningYear.year
    }
    else {
        return undefined
    }
}
