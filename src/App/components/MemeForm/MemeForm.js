import React, { useEffect } from 'react'
import PropTypes from 'prop-types'


const initialState={}
function MemeForm(props) {
    const [state, setstate] = useState(initialState);
    useEffect(() => {
        //effect
        return () => {
            //cleanup
        }
    }, [state])
    return (
        <div data-testid="MemeForm">
            memeForm
        </div>
    )
}

MemeForm.propTypes = {

}

MemeForm.defaultProps = {

}

export default MemeForm

