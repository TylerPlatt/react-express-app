import React, { useEffect, useState }from 'react'

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch ("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div>

        {(typeof backendData.items === 'undefined') ? (
          <p>Loading...</p>
        ): (
          backendData.items.map((item,i) => {
            return (
              <p>{item}</p>
            )
          })
        )}

    </div>
  )
}

export default App



