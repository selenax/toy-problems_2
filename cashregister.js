// Cash Register
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

// Currency Unit	Amount
// Penny	        $0.01 (PENNY)
// Nickel	        $0.05 (NICKEL)
// Dime	            $0.1 (DIME)
// Quarter	        $0.25 (QUARTER)
// Dollar	        $1 (ONE)
// Five Dollars	    $5 (FIVE)
// Ten Dollars	    $10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)

// See below for an example of a cash-in-drawer array:

// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]

function checkCashRegister(price, cash, cid) {
    //return obj with 2 keys: status and change
    let change = cash - price;
    let result = [];
    let currency = {
      'PENNY': 0.01,
      'NICKEL': 0.05,
      'DIME': 0.1,
      'QUARTER': 0.25,
      'ONE': 1,
      'FIVE': 5, 
      'TEN': 10,
      'TWENTY': 20,
      'ONE HUNDRED': 100
    }
  
    //get total in cid 
    let totalCid = 0;
    cid.forEach(element => {
      totalCid += element[1];
    })

    totalCid = totalCid.toFixed(2)
  
    //check conditions
    //1. total in cid < change   return {status: "INSUFFICIENT_FUNDS", change: []}
      // ALSO need to add logic for if don't have exact change
    if(totalCid < change) return {status: "INSUFFICIENT_FUNDS", change: result};
  
    //2. total in cid === change, return {status: "CLOSED", change: cid}
    if(totalCid == change) return {status: "CLOSED", change: cid};
    else {
    
    //3. else calculate denomination to be given and return {status: "OPEN", change: [...]} && check if don't have exact change return {status: "INSUFFICIENT_FUNDS", change: []};
    // check from large to small unit, reverse cid order 
    let newCid = cid.reverse();
    
    //loop through each currency unit in cid
    newCid.map((element) => {
    let changeToGive = [element[0], 0];
    //if the smallest unit per denom is less than change and change per denom isn't 0
    while(change >= currency[element[0]] && element[1] > 0) {
      //subtracts current unit denom get to new change
      change -= currency[element[0]]
      //fixed at 2 decimals to offset JS floating point precision 
      change = change.toFixed(2)
      // keep tracks of total amount of change to give
      changeToGive[1] += currency[element[0]]
      //update change left in cid 
      element[1] -= currency[element[0]]
      }
      //accumlated change if changeToGive[1] isn't equal to 0, add change to result array.
      if(changeToGive[1] > 0) result.push(changeToGive)
    })
    //at end of loop, if there's still change left, means don't have exact change
    if(change > 0) return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    //else return the change result
    return {status: "OPEN", change: result} 
  } 



// test cases
// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))  //should return an object.
// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])) //should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
//console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])) //should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])) //should return {status: "INSUFFICIENT_FUNDS", change: []}.
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])) //should return {status: "INSUFFICIENT_FUNDS", change: []}.
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])) //should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.