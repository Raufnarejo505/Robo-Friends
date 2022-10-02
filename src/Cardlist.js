import React from 'react'
import Card from './Card'

export default function Cardlist({cats}) {

  return (
    <div>
      {
        cats.map((user,index) => {
          return (<Card key={cats[index].id} id={cats[index].id} name={cats[index].name} email={cats[index].email}/>)
        })
      }
    </div>
  )
}
