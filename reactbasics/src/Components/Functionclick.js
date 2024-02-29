import React from 'react'

function Functionclick() {
    function clickHandler(){
        console.log('Button click')
    }
  return (
    <div>
      <button onClick = {clickHandler}>Click</button>
    </div>
  )
}

export default Functionclick
