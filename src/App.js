import React, { useState, useEffect } from 'react';
import { BsChevronDoubleRight } from "react-icons/bs";


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

  const { company, dates, duties, title } = jobs[value]
  return <div className='main'>
    <div className='container'>
      <div className='titleDiv row'>
        Experience
      </div>

      <div className='job row'>
        <div className='col-md-3 btn-container'> 
          {
            jobs.map((job, index)=> {
              return (
                <button key={job.id} onClick={() => setValue(index)} className={`jobButton ${index === value && 'activeButton'}`}> {job.company} </button>
              )
            })
          }
        </div>

        <div className='col-md-9 details'>
          <h2>{title}</h2>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {
            duties.map((duty, index) => {
              return (
                <div className='duty'>
                  <BsChevronDoubleRight className='arrow' /> <p key={index}>{duty}</p>
                </div>
              )
            })
          }
        </div>
      </div>
  </div>
  </div>


}

export default App;


