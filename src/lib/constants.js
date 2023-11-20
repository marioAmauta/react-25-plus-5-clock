export const ACTIONS = {
  BREAK_DECREASE: 'break-decrease',
  BREAK_INCREASE: 'break-increase',
  SESSION_DECREASE: 'session-decrease',
  SESSION_INCREASE: 'session-increase',
  DECREMENT_TIME_LEFT: 'decrement-time-left',
  PLAY: 'play',
  CHANGE_TO_BREAK: 'change-to-break',
  CHANGE_TO_SESSION: 'change-to-session',
  RESET: 'reset'
}

export const ELEMENTS_IDS = {
  breakLabel: 'break-label',
  breakLength: 'break-length',
  breakIncrement: 'break-increment',
  breakDecrement: 'break-decrement',
  sessionLabel: 'session-label',
  sessionLength: 'session-length',
  timerLabel: 'timer-label',
  timeLeft: 'time-left',
  sessionIncrement: 'session-increment',
  sessionDecrement: 'session-decrement',
  reset: 'reset',
  startStop: 'start_stop',
  beep: 'beep'
}

export const soundSource =
  'https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'

export const timingTypes = {
  BREAK: 'Break',
  SESSION: 'Session'
}

export const lengthLimit = {
  min: 1,
  max: 60
}

export const initialState = {
  breakLength: 5,
  sessionLength: 25,
  play: false,
  timeLeft: 1500,
  timingType: timingTypes.SESSION
}
