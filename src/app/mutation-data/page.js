import React from 'react'
import { addCourse } from '../action'
const MutationData = () => {
  return (
    <div>
        <h1>Mutation Data</h1>
        <div>
            <form action={addCourse}>
                <input type="text" name="name" placeholder='Enter Name' />
                <input type="text" name="course" placeholder='Enter Course' />
                <button type='submit'>Add User</button>
            </form>
        </div>
    </div>
  )
}

export default MutationData ;