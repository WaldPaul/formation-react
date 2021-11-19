import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeThumbnail.module.css';
import MemeViewer from '../MemeViewer/MemeViewer';
import InternalLayout from '../InternalLayout/InternalLayout';
import { connect } from 'react-redux';

const MemeThumbnail = (props) => {
  console.log('MT',props)
  return (
    <div>
      <InternalLayout
       className={styles.MemeThumbnail}>
        {props.memes.map((e,i)=><MemeViewer
          meme={e}
          image={props.images.find(img=>img.id===e.imageId)}
        />)}
      </InternalLayout>
    </div>
  )
}

MemeThumbnail.propTypes = {
  memes:PropTypes.array.isRequired,
  images:PropTypes.array.isRequired,
};

MemeThumbnail.defaultProps = {};

function mapStateToProps(state,own){
  return {
    ...own,
    memes:state.ressources.memes,
    images:state.ressources.images
  }
}
function mapDispatchToProps(dispatch)
{
  return{ }
}


export default connect(mapStateToProps,mapDispatchToProps)( MemeThumbnail);
