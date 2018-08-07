import _ from 'lodash'
import { all, takeEvery, select, put } from 'redux-saga/effects'
import { actionCreator } from 'utils/common.js'

// ------------------------------------
// Action Type Constants
// ------------------------------------
const MODULE = 'NAVIGATION'
const UPDATE = `${MODULE}/UPDATED`
const UPDATE_NAV = `${MODULE}/NAV/UPDATED`
const UPDATE_PAGE = `${MODULE}/PAGE/UPDATED`
const UPDATE_IS_TEACHING_VIEW = `${MODULE}/IS_TEACHING_VIEW/UPDATED`

// ------------------------------------
// Action Creators
// ------------------------------------
export const update = actionCreator(UPDATE, 'payload')
export const updatePage = actionCreator(UPDATE_PAGE)
export const updateIsNavOpen = actionCreator(UPDATE_NAV, 'isOpen')
export const updateIsTeachingView = actionCreator(UPDATE_IS_TEACHING_VIEW)

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [UPDATE] : (state, action) => {
    return {
      ...state,
      ...action.payload
    }
  },
  [UPDATE_NAV] : (state, action) => {
    return {
      ...state,
      isNavOpen: action.isOpen
    }
  },
  [UPDATE_PAGE] : (state, action) => {
    return {
      ...state,
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  isNavOpen: false,
  isTeachingView: false
}

export const reducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}

// ------------------------------------
// Selectors
// ------------------------------------
export const getModule = state => state.app.navigation
export const getProp = (state, prop, defaultVal) => _.get(getModule(state), prop, defaultVal)
export const getIsNavOpen = state => getProp(state, 'isNavOpen')
export const getIsTeachingView = state => getProp(state, 'isTeachingView')
export const getPathname = state => state.router.location.pathname
export const getSlug = state => _.chain(getPathname(state))
  .split('/')
  .filter(p => !_.isEmpty(p))
  .last()
  .value()

// ------------------------------------
// Sagas
// ------------------------------------
export function * pageUpdated (action) {}

export function * handleUpdateTeachingView () {
  const slug = yield select(getSlug)

  if (slug === 'teaching') {
    yield put(update({ isTeachingView: true }))
  }
}

// ------------------------------------
// Saga Watchers
// ------------------------------------
export function * sagas () {
  yield all({
    updateIsTeachingView: takeEvery(UPDATE_IS_TEACHING_VIEW, handleUpdateTeachingView)
  })
}
