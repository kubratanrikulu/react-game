import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
const iconList = ['', 'X', 'O']
function App() {
  const [card, setCard] = useState(Array(9).fill(""))
  const [winner, setWinner] = useState()
  const push = () => {
    let newList = []
    let iconNumber = 0
    for (let i = 0; i < 18; i=i+2) {
      newList.push({
        icon: '',
        isOpen: true,
        status: false
      })
      if (i % 3 === 1) {
        iconNumber++
      }
    }
    setCard(newList)
    console.log(newList)
  }
  useEffect(() => {
    push()
  }, [])
  const openCard = (id) => {
    const newCard = [...card];
    const item = card[id].icon === "" ? "X" : card[id].icon === "X" ? "O" : "";
    newCard[id].icon = item;
    if(newCard[id].icon !== "") {
      newCard[id].isOpen = true
    } else {
      newCard[id].isOpen = false
    }
    checkForWinner(newCard)
    setCard(newCard);
  };
  const checkForWinner = (card) => {
		let combos = {
			row: [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
			],
			column: [
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
			],
			diagnol: [
				[0, 4, 8],
				[2, 4, 6],
			],
		};
		for (let combo in combos) {
      let winnerResult;
      let completed =false;
			combos[combo].forEach((pattern) => {
      if (completed) return;
        if (
          card[pattern[0]].icon === '' ||
          card[pattern[1]].icon === '' ||
          card[pattern[2]].icon === ''
        ) {
          
          
        } else if (
          card[pattern[0]].icon === card[pattern[1]].icon &&
          card[pattern[1]].icon === card[pattern[2]].icon
        ) {
          card[pattern[0]].status = true
          card[pattern[1]].status = true
          card[pattern[2]].status = true
          completed = true;
          winnerResult = card[pattern[0]].icon
          setWinner(winnerResult);
        }
      });
      if (winnerResult) break;
		}
	};
  useEffect(() => {
    let id;
   if (winner) {
    console.log(card)
    card.itemStatus = true
    id = setTimeout(() =>{
      setWinner(undefined);
      const newCard = [...card].map(card => ({
        ...card,
      icon: '',
      status: false
      }))
      setCard(newCard)
    }, 3000)
    
   }
   return () => {
    clearTimeout(id);
   }
  }, [winner])
  
  return (
    <div className="App">
      <div className='container'>
        <div className='row align-items-center justify-content-center'>
          <h1 className='title mt-5'>GAME TIME</h1>
          <div className='game'>
            {
              card.map((Item, index) =>
                <div key={index} className={
                  Item.status ? 'Box Win ' : Item.isOpen ? 'Box Open' : 'Box'
                  } onClick={() => openCard(index)}>
                   {Item.isOpen && Item.icon}
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
