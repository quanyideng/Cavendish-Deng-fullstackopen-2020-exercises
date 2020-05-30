import React from 'react'
import Course from './components/Course'

const App = ({courses}) => {
    // console.log('App', course)
    return (
        <div>
            {courses.map(course => <Course key={course.id} course={course} />)}
        </div>
    )
}

export default App