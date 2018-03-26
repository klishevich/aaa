// function Player(name) {
//   this.setTurn = () => {
//     if (name === "Player 1") return true; else return false;
//   }
//   this.name = name;
//   this.moves = [];
//   this.playersTurn = this.setTurn(); 
//   this.playerWon = false;
// }

// let player1 = new Player('Player 1');
// console.log(player1);

// let player2 = new Player('Player 2');
// console.log(player2);

// function createPlayer(name) {
//   const setTurn = () => {
//     if (name === "Player 1") return true; else return false;
//   }

//   return {
//     name: name,
//     moves: [],
//     playersTurn: setTurn(),
//     playerWon: false
//   }
// }

// let player11 = createPlayer('Player 1');
// console.log(player11);

// let player22 = createPlayer('Player 2');
// console.log(player22);


// let [history, timer, whoWon, availBoxes] = [[],0,"",[]];

// (function buildField(){
//   const rows = [1,2,3];
//   const columns = [1,2,3];
//   let tableRows = "<table>";
//    tableRows += rows.map((item,i)=>{ 
//     let tableConstruct = `<tr id='tr${i}'>`;
//     let tableConstruct2 = columns.map((item2,i2)=>{ 
//       availBoxes.push(`tr${i}td${i2}`);
//       return `<td id="tr${i}td${i2}" onclick="handleThis('tr${i}td${i2}')"> </td>`
//     })
//     tableConstruct2 = tableConstruct2.join('');
  
//     tableConstruct += `${tableConstruct2}</tr>`;
    
//     return tableConstruct;
//   })
//   tableRows = tableRows.replace(/,/g,'');
//   tableRows += "</table>";
//   console.log(tableRows);
// })()


const winCollection = [[1, 2, 3], [3, 4, 5]];
const ttt = [ 1, 2, 3, 4];
const player1 = [1, 3, 2, 5];
const player2 = [1, 7, 4, 2];

const res = winCollection.some(winCombo => winCombo.every(el => player1.includes(el)));
console.log(res);

