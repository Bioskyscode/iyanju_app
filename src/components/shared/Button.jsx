import PropTypes from 'prop-types'

function Button({btnText, btnType, version, isDisabled, clickFunction}) {
  return (
    <button onClick={clickFunction} type={btnType} disabled= {isDisabled} className= {`btn btn-${version}`} >
        {btnText}
    </button>
  )
}


Button.propTypes = {
    btnText: PropTypes.node.isRequired,
    btnType: PropTypes.string,
    version:PropTypes.string,
    isDisabled:PropTypes.bool
}

export default Button