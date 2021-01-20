/* eslint-disable react/no-array-index-key */
import React from 'react'
import PropType from 'prop-types'
import { Tabs } from 'antd'
import PDFViewer from '../PDFViewer'

import { init } from '../../scripts/pdfjs'

const { TabPane } = Tabs

const ChaptersTabs = ({ chapters }) => (
  <div className="chaptersTabsWrapper">
    <Tabs tabPosition="left" defaultActiveKey={1}>
      {chapters.map((chapter, index) => (
        <TabPane tab={chapter.name} key={index}>
          <PDFViewer script={init} src={chapter.href} />
        </TabPane>
      ))}
    </Tabs>
  </div>
)

export default ChaptersTabs

ChaptersTabs.propTypes = {
  chapters: PropType.array,
}
