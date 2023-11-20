import { ACTIONS, initialState, lengthLimit, timingTypes } from './constants'

export function timerReducer(state, { type }) {
  switch (type) {
    case ACTIONS.BREAK_DECREASE: {
      if (state.breakLength === lengthLimit.min) return state

      return {
        ...state,
        breakLength: state.breakLength - 1
      }
    }

    case ACTIONS.BREAK_INCREASE: {
      if (state.breakLength === lengthLimit.max) return state

      return {
        ...state,
        breakLength: state.breakLength + 1
      }
    }

    case ACTIONS.SESSION_DECREASE: {
      if (state.sessionLength === lengthLimit.min) return state

      return {
        ...state,
        sessionLength: state.sessionLength - 1,
        timeLeft: state.timeLeft - 60
      }
    }

    case ACTIONS.SESSION_INCREASE: {
      if (state.sessionLength === lengthLimit.max) return state

      return {
        ...state,
        sessionLength: state.sessionLength + 1,
        timeLeft: state.timeLeft + 60
      }
    }

    case ACTIONS.DECREMENT_TIME_LEFT: {
      return {
        ...state,
        timeLeft: state.timeLeft - 1
      }
    }

    case ACTIONS.PLAY: {
      return {
        ...state,
        play: !state.play
      }
    }

    case ACTIONS.CHANGE_TO_BREAK: {
      return {
        ...state,
        timeLeft: state.breakLength * 60,
        timingType: timingTypes.BREAK
      }
    }

    case ACTIONS.CHANGE_TO_SESSION: {
      return {
        ...state,
        timeLeft: state.sessionLength * 60,
        timingType: timingTypes.SESSION
      }
    }

    case ACTIONS.RESET: {
      return initialState
    }

    default:
      return state
  }
}
