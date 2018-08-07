import React from 'react'
import PropTypes from 'prop-types'
import './Gallery.scss'

class Gallery extends React.Component {
  constructor (props, context) {
    super()
    this.state = { index: 0 }
    this.previous = this.previous.bind(this)
    this.next = this.next.bind(this)
  }

  previous () {
    const { children } = this.props
    const index = this.state.index <= 0 ? children.length - 1 : this.state.index - 1
    this.setState({ index })
  }

  next () {
    const { children } = this.props
    const index = this.state.index >= children.length - 1 ? 0 : this.state.index + 1
    this.setState({ index })
  }

  render () {
    const { children, className } = this.props

    const item = children.length > 1 ? children[this.state.index] : children
    const itemWithProps = React.cloneElement(item, { previous: this.previous, next: this.next })

    return (
      <div className={`Gallery ${className}`}>
        <div className='Gallery__frame'>
          {itemWithProps}
        </div>
      </div>
    )
  }
}

Gallery.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

Gallery.defaultProps = {
  className: ''
}

export default Gallery
