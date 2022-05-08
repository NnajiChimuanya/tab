import React, { useState, useEffect } from 'react';


const url = "https://course-api.com/react-tabs-project"

function App() {

  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const api = async () => {
    let data = await fetch(url)
    let json = await data.json()
    setJobs(json)
    setLoading(false)
  }

  useEffect(() => {
    api()
  }, [])

  if(loading) {
    return <h1>Loading...</h1>
  }

  return <div>
    Jobs
  </div>


}

export default App;


