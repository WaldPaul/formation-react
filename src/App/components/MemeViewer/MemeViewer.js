import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeViewer.module.css';

//interface I_Props {
//  meme: ici le type de l'objet
//}

const MemeViewer = (props) => {
  return(
    <svg 
      className={styles.MemeViewer} 
      ata-testid="MemeViewer" 
      viewBox={`0 0 ${props.image?props.image.w:1000} ${props.image?props.image.h:1000}`}
      >
      {/* Note : le && est pour verifier que l'image existe, on pourrait faire une ternaire. C'est propre à React dans le return */}
      {props.image && <image href={props.image.url} x="0" y="0"/>}
      <text
        x={props.meme.x}
        y={props.meme.y}
        fill={props.meme.color}
        fontSize={props.meme.fontSize}
        fontWeight={props.meme.fontWeight}
        textDecoration={props.meme.underline?'underline':'none'}
        fontStyle={props.meme.italic?'italic':'none'}
      >{props.meme.text}</text>
    </svg>
  )
  };


// En typescript : replacer par une interface
MemeViewer.propTypes = {
  meme: PropTypes.object.isRequired,
  image: PropTypes.object,
};

MemeViewer.defaultProps = {

};

export default MemeViewer;