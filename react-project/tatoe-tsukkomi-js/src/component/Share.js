import React from 'react'
import { TwitterShareButton, LineShareButton, TwitterIcon, LineIcon } from "react-share";
import "./Share.css"

const Share = ({url, title}) => {
  return (
    <div className="Share">
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={45} round />
      </TwitterShareButton>

      <LineShareButton url={url} title={title}>
        <LineIcon size={45} round />
      </LineShareButton>
    </div>
  )
}

export default Share
