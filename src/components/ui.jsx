import PropTypes from 'prop-types'

export function LengthTitle({ id, label }) {
  return (
    <h3
      id={id}
      className='mb-6 text-center text-xl font-semibold'
    >
      {label}
    </h3>
  )
}
LengthTitle.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export function LengthControl({ children }) {
  return <div className='flex justify-center items-center gap-4'>{children}</div>
}
LengthControl.propTypes = {
  children: PropTypes.node.isRequired
}

export function LengthButton({ id, disabled, onClick, icon }) {
  return (
    <button
      id={id}
      disabled={disabled}
      onClick={onClick}
    >
      {icon}
    </button>
  )
}
LengthButton.propTypes = {
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.node.isRequired
}

export function LengthValue({ id, value }) {
  return (
    <span
      id={id}
      className='text-4xl'
    >
      {value}
    </span>
  )
}
LengthValue.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}
