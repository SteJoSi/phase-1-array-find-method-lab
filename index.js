// code your solution here
function superbowlWin(record) {
    let results = record.find(record => record.result === 'W');
    console.log(results);
    if (results) {
        return results.year;
    } else {return undefined
    }
}