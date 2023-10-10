import React from 'react'
import './brand.css'
import { google, slack, atlassian, dropbox, shopify } from "./imports"

export const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div className="gpt3__brand-img">
      <img src={google} alt="google" />
      </div>
      <div className="gpt3__brand-img">
      <img src={slack} alt="slack" />
      </div>
      <div className="gpt3__brand-img">
      <img src={atlassian} alt="atlassian" />
      </div>
      <div className="gpt3__brand-img">
      <img src={dropbox} alt="dropbox" />
      </div>
      <div className="gpt3__brand-img">
      <img src={shopify} alt="shopify" />
      </div>
    </div>
  )
}

export default Brand
