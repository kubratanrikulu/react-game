import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
const iconList = ['', 'X', 'O']
function App() {
  const [card, setCard] = useState([])
  const [finalArray, setFinalArray] = useState([ [1,2,3,4,5,6,7,8,9].map( () => ({icon : ''}) )])
  console.log(finalArray)

  const push = () => {
    let newList = []
    let iconNumber = 0
    for (let i = 0; i < 18; i=i+2) {
      newList.push({
        icon: iconList[iconNumber],
        isOpen: false,
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
  const openCard = id => {
    const item = finalArray[id].icon === '' ? 'X' : finalArray[id].icon === 'X' ?  'O' : ''
    setFinalArray(item)
    console.log(finalArray)
   }
  return (
    <div className="App">
      <div className='container'>
        <div className='row align-items-center justify-content-center'>
          <h1 className='title mt-5'>GAME TIME</h1>
          <div className='game'>
            {
              card.map((Item, index) =>
                <div key={index} className='box' onClick={() => openCard(index)}>
                   {Item.isOpen ?? Item.icon}
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
