import { click } from '@testing-library/user-event/dist/click'
import { isDisabled } from '@testing-library/user-event/dist/utils'
import PropTypes from 'prop-types'
import { version } from 'react'


function Button({btnText, btnType, version, isDisabled, clickFunction}) {
  return (
    <button onClick={clickFunction} type={btnType} disabled= {isDisabled} className= {`btn btn-${version}`} >
        {btnText}
    </button>
  )
}

// Button.defaultProps = {
//     children: 'Send',
//     version:'primary',
//     isDisabled: false
// }

Button.propTypes = {
    btnText: PropTypes.node.isRequired,
    btnType: PropTypes.string,
    version:PropTypes.string,
    isDisabled:PropTypes.bool
}

export default Button