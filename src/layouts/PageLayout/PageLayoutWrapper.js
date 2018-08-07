import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { mountRequested } from 'modules/app'
import { getIsNavOpen, getIsTeachingView, updateIsNavOpen } from 'modules/navigation'
import NavLink from 'components/NavLink/NavLink'
import PageLayout from 'layouts/PageLayout'
import HomeView from 'components/Views/HomeView'
import TeachingView from 'components/Views/TeachingView'
import CV from 'components/Views/CV'
import Coalitions from 'components/Project/Coalitions'
import FantasticFutures from 'components/Project/FantasticFutures'
import PortraitsOfFlowers from 'components/Project/PortraitsOfFlowers'
import HowDoYouSingIt from 'components/Project/HowDoYouSingIt'
import SupposeWeRaveABit from 'components/Project/SupposeWeRaveABit'
import TimeTravels from 'components/Project/TimeTravels'
import InvisibleLibrary from 'components/Project/InvisibleLibrary'
import MeetingTable from 'components/Project/MeetingTable'
import StudyCollaboration from 'components/Project/StudyCollaboration'
import TheSilentPeriod from 'components/Project/TheSilentPeriod'
import TradeSchool from 'components/Project/TradeSchool'
import './PageLayout.scss'

const mapDispatchToProps = {
  mount: () => mountRequested(),
  updateIsNavOpen: value => updateIsNavOpen(value)
}

const mapStateToProps = state => {
  return {
    isNavOpen: getIsNavOpen(state),
    isTeachingView: getIsTeachingView(state)
  }
}

export class PageLayoutWrapper extends React.Component {
  componentWillMount () {
    this.props.mount()
  }

  componentWillUpdate (prevProps) {
    const previousPathname = prevProps.location.pathname
    const currentPathname = this.props.location.pathname

    if (previousPathname !== currentPathname) {
      window.scrollTo(0, 0)
    }
  }

  toggleNavigation = () => this.props.updateIsNavOpen(!this.props.isNavOpen)

  openNav = () => this.props.updateIsNavOpen(true)

  closeNav = () => this.props.updateIsNavOpen(false)

  render () {
    const headerClassName = this.props.isNavOpen ? 'header header--open' : 'header'

    const rootLink = this.props.isTeachingView ? '/teaching' : '/'

    return (
      <div className='container'>
        <header className={headerClassName}>
          <h1>
            <Link to={rootLink}>Or Zubalsky</Link>
          </h1>
          <div className='header__info print'>
            <a href='http://orzubalsky.com'>orzubalsky.com</a>
            <a href='mailto:orzubalsky@gmail.com'>orzubalsky@gmail.com</a>
            <span>646-717-4799</span>
            <span>Brooklyn, NY</span>
          </div>
          <a
            className='header__toggle-nav'
            onClick={this.toggleNavigation}
            onMouseEnter={this.openNav}
          >
            <i className='fas fa-bars' />
          </a>
          <nav className='header__nav' onMouseLeave={this.closeNav}>
            <ul>
              <li className='nav__item'>
                <h2 className='nav__header'>
                  <Link to={rootLink} onClick={this.closeNav} >About</Link>
                </h2>
              </li>
              <li className='nav__item'>
                <h2 className='nav__header'>Projects</h2>
                <ul className='sublist'>
                  <NavLink name='Coalitions' slug='coalitions' />
                  <NavLink
                    name='How Will You Write it in a Sentence? How Will You Sing it?'
                    slug='how-will-you-write-it-in-a-sentence-how-will-you-sing-it'
                    />
                  <NavLink name='Portraits of Flowers Before Oslo, 1992' slug='portraits-of-flowers-before-oslo-1992' />
                  <NavLink
                    name='Time Travels: Building a State in the Middle East'
                    slug='time-travels-building-a-state-in-the-middle-east'
                  />
                  <NavLink name='Suppose We Rave a Bit' slug='suppose-we-rave-a-bit' />
                  <NavLink name='Meeting Table' slug='meeting-table' />
                  <NavLink name='The Silent Period' slug='the-silent-period' />
                </ul>
              </li>
              <li className='nav__item'>
                <h2 className='nav__header'>Platforms</h2>
                <ul className='sublist'>
                  <NavLink name='Study Collaboration' slug='study-collaboration' />
                  <NavLink name='Invisible Library' slug='invisible-library' />
                  <NavLink name='Fantastic Futures' slug='fantastic-futures' />
                  <NavLink name='Trade School' slug='trade-school' />
                </ul>
              </li>
              <li className='nav__item'>
                <h2 className='nav__header'>
                  <Link to='/cv' onClick={this.closeNav} >CV</Link>
                </h2>
              </li>
            </ul>
          </nav>
        </header>
        <main className='main'>
          <PageLayout exact path='/' Component={HomeView} />
          <PageLayout exact path='/cv' Component={CV} />
          <PageLayout exact path='/teaching' Component={TeachingView} />
          <PageLayout exact path='/project/coalitions' Component={Coalitions} />
          <PageLayout exact path='/project/fantastic-futures' Component={FantasticFutures} />
          <PageLayout exact path='/project/portraits-of-flowers-before-oslo-1992' Component={PortraitsOfFlowers} />
          <PageLayout exact path='/project/how-will-you-write-it-in-a-sentence-how-will-you-sing-it' Component={HowDoYouSingIt} />
          <PageLayout exact path='/project/suppose-we-rave-a-bit' Component={SupposeWeRaveABit} />
          <PageLayout exact path='/project/time-travels-building-a-state-in-the-middle-east' Component={TimeTravels} />
          <PageLayout exact path='/project/invisible-library' Component={InvisibleLibrary} />
          <PageLayout exact path='/project/meeting-table' Component={MeetingTable} />
          <PageLayout exact path='/project/study-collaboration' Component={StudyCollaboration} />
          <PageLayout exact path='/project/the-silent-period' Component={TheSilentPeriod} />
          <PageLayout exact path='/project/trade-school' Component={TradeSchool} />
        </main>
      </div>
    )
  }
}

PageLayoutWrapper.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
  isTeachingView: PropTypes.bool.isRequired,
  location: PropTypes.object,
  mount: PropTypes.func.isRequired,
  updateIsNavOpen: PropTypes.func.isRequired
}

PageLayoutWrapper.defaultProps = {
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PageLayoutWrapper))
