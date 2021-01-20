import React, { useEffect } from 'react'
import PropType from 'prop-types'

const PDFViewer = ({ script, src }) => {
  const viewerRef = React.createRef()

  useEffect(() => {
    const element = viewerRef.current
    script(src, element)
  }, [script, src, viewerRef])

  return <div ref={viewerRef} id="viewer" className="viewerWrapper"></div>
}

export default PDFViewer

PDFViewer.propTypes = {
  script: PropType.func,
  src: PropType.string,
}
