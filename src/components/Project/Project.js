import React from 'react'
import PropTypes from 'prop-types'
import './Project.scss'

export class Project extends React.Component {
  render () {
    const className = [
      'Project',
      this.props.className
    ].join(' ')

    return (
      <div className={className}>
        {this.props.children}
      </div>
    )
  }
}

Project.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

Project.defaultProps = {
  className: ''
}

export default Project
