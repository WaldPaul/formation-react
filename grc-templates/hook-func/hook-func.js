import React, { useEffect } from 'react'
import PropTypes from 'prop-types'


const initialState={}
function TemplateName(props) {
    const [state, setstate] = useState(initialState);
    useEffect(() => {
        effect
        return () => {
            cleanup
        }
    }, [state])
    return (
        <div data-testid="TemplateName">
            templateName
        </div>
    )
}

TemplateName.propTypes = {

}

TemplateName.defaultProps = {

}

export default TemplateName

