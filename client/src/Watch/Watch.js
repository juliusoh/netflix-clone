import { ArrowBackOutlined } from '@material-ui/icons'
import React from 'react'
import './Watch.scss'

const Watch = () => {
  return (
    <div className="watch">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
        <video className="video" src="" autoPlay progress controls></video>
    </div>
  )
}

export default Watch
