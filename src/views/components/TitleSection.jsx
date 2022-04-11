import React from 'react'
import PropTypes from 'prop-types'

import bgTitle from '../../assets/images/bg-title.png'

export default function TitleSection({ className, text }) {
  return (
    <h2
      className={className ? `${className} "title-section"` : 'title-section'}
      style={{ backgroundImage: `url(${bgTitle})` }}
    >
      {text}
    </h2>
  )
}

TitleSection.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
}
