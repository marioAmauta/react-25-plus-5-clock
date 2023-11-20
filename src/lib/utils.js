export function formatTime(timeLeft) {
  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft - minutes * 60
  const formattedSeconds = seconds < 10 ? '0' + seconds : seconds
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes

  return `${formattedMinutes}:${formattedSeconds}`
}
