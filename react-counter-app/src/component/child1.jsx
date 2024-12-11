import React from 'react'
import parent from "./child2"
const child1 = ({student}) => {
  return (
    <duv>
        <div>child1</div>
        <child2 student={student}/>
    </duv>
  )
}

export default child1