import React from 'react';

const Card = ({name, email, id}) => {
  return (
    <div className='tc bg-light-green dib w5 br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='robohash' src={`http://robohash.org/${id}?set=set3&size=150x150`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>

  )
}

export default Card;