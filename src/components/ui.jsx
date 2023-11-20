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
  return (
    <div
      className='
        flex justify-center items-center gap-4
      '
    >
      {children}
    </div>
  )
}
LengthControl.propTypes = {
  children: PropTypes.node.isRequired
}

export function LengthButton({ id, disabled, icon, onClick }) {
  return (
    <button
      id={id}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
    </button>
  )
}
LengthButton.propTypes = {
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export function LengthValue({ id, value }) {
  return (
    <span
      className=' text-4xl'
      id={id}
    >
      {value}
    </span>
  )
}
LengthValue.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}
