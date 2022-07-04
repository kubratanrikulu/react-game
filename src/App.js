import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
const iconList = ['', 'X', 'O']
function App() {
  const [card, setCard] = useState([])
  const [finalArray, setFinalArray] = useState(['','','','','','','','',''])
  console.log("finalArray",finalArray)

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
    // console.log(finalArray[0] ,"asddasd")
    const item = finalArray[id] === '' ? 'X' : finalArray[id] === 'X' ?  'O' : ''
    console.log(item,"item")
    setFinalArray(finalArray[id] = item)
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
