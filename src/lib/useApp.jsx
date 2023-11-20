import { useEffect, useReducer } from 'react'
import { ACTIONS, ELEMENTS_IDS, initialState, timingTypes } from './constants'
import { formatTime } from './utils'
import { timerReducer } from './reducer'

export function useApp() {
  const [state, dispatch] = useReducer(timerReducer, initialState)

  const timerTitle = timingTypes[state.timingType.toUpperCase()]
  const timeLeft = formatTime(state.timeLeft)

  const timeout = setTimeout(() => {
    if (state.timeLeft && state.play) {
      dispatch({ type: ACTIONS.DECREMENT_TIME_LEFT })
    }
  }, 1000)

  function handleBreakDecrease() {
    dispatch({ type: ACTIONS.BREAK_DECREASE })
  }

  function handleBreakIncrease() {
    dispatch({ type: ACTIONS.BREAK_INCREASE })
  }

  function handleSessionDecrease() {
    dispatch({ type: ACTIONS.SESSION_DECREASE })
  }

  function handleSessionIncrease() {
    dispatch({ type: ACTIONS.SESSION_INCREASE })
  }

  function handlePlay() {
    clearTimeout(timeout)

    dispatch({ type: ACTIONS.PLAY })
  }

  function handleReset() {
    clearTimeout(timeout)

    dispatch({ type: ACTIONS.RESET })

    const audio = document.getElementById('beep')
    audio.pause()
    audio.currentTime = 0
  }

  useEffect(() => {
    function resetTimer() {
      const audio = document.getElementById(ELEMENTS_IDS.beep)

      if (!state.timeLeft && state.timingType === timingTypes.SESSION) {
        dispatch({ type: ACTIONS.CHANGE_TO_BREAK })

        audio.play()
      }

      if (!state.timeLeft && state.timingType === timingTypes.BREAK) {
        dispatch({ type: ACTIONS.CHANGE_TO_SESSION })

        audio.pause()
        audio.currentTime = 0
      }
    }

    function clock() {
      if (state.play) {
        timeout

        resetTimer()
      } else {
        clearTimeout(timeout)
      }
    }

    clock()

    return () => clearTimeout(timeout)
  }, [state.play, state.timeLeft, state.timingType, timeout])

  return {
    state,
    timerTitle,
    timeLeft,
    handleBreakDecrease,
    handleBreakIncrease,
    handleSessionDecrease,
    handleSessionIncrease,
    handlePlay,
    handleReset
  }
}
