import React from 'react'
import child2 from './child1'
const Parent = () => {
    const stu ={
        name:"ABC",
        age:23,
    }
  return (
    <StudentContext.provider value={stu}>
    <div>
        <div>Parent component</div>
        <child1/>
    </div>
    </StudentContext.provider>
  )
}

export default Parent