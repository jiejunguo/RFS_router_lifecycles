import React from 'react';

const Conditional = () => {

  const value = true;

  const returnValue = () => {
    return true;
  }

  const showIt = () => {
    return(returnValue()?
      <div>
        Hello, it's true
      </div>
      :
      <div>
        Hello, it's false
      </div>
    )
  }

  return (
    <div>
      {showIt()}
      {
        // <div>
        //   Hello, it's true
        // </div>
        // :
        // <div>
        //   Hello, it's false
        // </div>}
        }
      </div>
  )
}

export default Conditional;
