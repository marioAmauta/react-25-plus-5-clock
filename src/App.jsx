import { IconArrowUp, IconArrowDown, IconReset, IconStartStop } from './components/icon'
import { LengthButton, LengthControl, LengthTitle, LengthValue } from './components/ui'
import { ELEMENTS_IDS, soundSource } from './lib/constants'
import { useApp } from './lib/useApp'

export default function App() {
  const {
    state,
    timerTitle,
    timeLeft,
    handleBreakDecrease,
    handleBreakIncrease,
    handleSessionDecrease,
    handleSessionIncrease,
    handlePlay,
    handleReset
  } = useApp()

  return (
    <main className='bg-[#1E555C] text-white flex flex-col justify-center items-center gap-16 md:gap-24 p-8 min-h-[100dvh]'>
      <h1 className='text-3xl font-bold'>25 + 5 Clock</h1>
      <div className='flex flex-col items-center gap-12 md:gap-16 w-full'>
        <div className=' flex gap-12 md:gap-16 flex-wrap justify-center'>
          <section>
            <LengthTitle
              id={ELEMENTS_IDS.breakLabel}
              label='Break Length'
            />
            <LengthControl>
              <LengthButton
                id={ELEMENTS_IDS.breakDecrement}
                disabled={state.play}
                icon={<IconArrowDown />}
                onClick={handleBreakDecrease}
              />
              <LengthValue
                id={ELEMENTS_IDS.breakLength}
                value={state.breakLength}
                disabled={state.play}
              />
              <LengthButton
                id={ELEMENTS_IDS.breakIncrement}
                disabled={state.play}
                icon={<IconArrowUp />}
                onClick={handleBreakIncrease}
              />
            </LengthControl>
          </section>
          <section>
            <LengthTitle
              id={ELEMENTS_IDS.sessionLabel}
              label='Session Length'
            />
            <LengthControl>
              <LengthButton
                id={ELEMENTS_IDS.sessionDecrement}
                disabled={state.play}
                icon={<IconArrowDown />}
                onClick={handleSessionDecrease}
              />
              <LengthValue
                id={ELEMENTS_IDS.sessionLength}
                value={state.sessionLength}
              />
              <LengthButton
                id={ELEMENTS_IDS.sessionIncrement}
                disabled={state.play}
                icon={<IconArrowDown />}
                onClick={handleSessionIncrease}
              />
            </LengthControl>
          </section>
        </div>
        <section
          className='
            border-8 border-[#13353A] rounded-3xl
            p-5
            text-center
            w-60
          '
        >
          <p
            id={ELEMENTS_IDS.timerLabel}
            className='text-3xl font-semibold mb-6'
          >
            {timerTitle}
          </p>
          <p
            id={ELEMENTS_IDS.timeLeft}
            className='text-3xl font-semibold'
          >
            {timeLeft}
          </p>
        </section>
        <section className='flex justify-center gap-4'>
          <button
            id={ELEMENTS_IDS.startStop}
            onClick={handlePlay}
          >
            <IconStartStop />
          </button>
          <button
            id={ELEMENTS_IDS.reset}
            onClick={handleReset}
          >
            <IconReset />
          </button>
        </section>
      </div>
      <audio
        id={ELEMENTS_IDS.beep}
        preload='auto'
        src={soundSource}
      />
    </main>
  )
}
