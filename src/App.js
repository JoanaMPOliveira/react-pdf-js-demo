/* eslint-disable no-console */
import React, { useState, useEffect } from 'react'

import ChaptersTabs from './components/ChaptersTabs'
import PDFViewer from './components/PDFViewer'

import { init } from './scripts/pdfjs'

import './App.css'
import 'antd/dist/antd.css'

function App() {
  const [chapters, setChapters] = useState()
  const [chapter, setChapter] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/toc?guid=1019', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (response.status !== 200) {
          console.log(
            `Looks like there was a problem. Status Code: ${response.status}`,
          )
          return
        }

        // Examine the text in the response
        response.json().then((data) => {
          setChapters(data.item)
          setChapter(data.item[0])
          setLoading(false)
        })
      })
      .catch((err) => {
        console.log('Fetch Error :-S', err)
      })
  }, [])

  return (
    <div className="App">
      {!loading && (
        <ChaptersTabs chapters={chapters}>
          <PDFViewer script={init} src={chapter.href} />
        </ChaptersTabs>
      )}
    </div>
  )
}

export default App
