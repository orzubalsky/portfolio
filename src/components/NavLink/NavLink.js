import { connect } from 'react-redux'
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { updateIsNavOpen } from 'modules/navigation'

const mapDispatchToProps = {
  updateIsNavOpen: value => updateIsNavOpen(value)
}

const mapStateToProps = (state) => {
  return {}
}

export class NavLink extends React.Component {
  render () {
    const linkProps = {
      to              : `/project/${this.props.slug}`,
      onClick         : () => { this.props.updateIsNavOpen(false) }
    }

    return (
      <li className='sublist__item'>
        <Link {...linkProps}>
          {this.props.name}
        </Link>
      </li>
    )
  }
}
NavLink.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  updateIsNavOpen: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(NavLink)
