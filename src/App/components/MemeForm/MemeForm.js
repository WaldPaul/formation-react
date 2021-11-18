import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import styles from './MemeForm.module.css'
const initialState = {};
function MemeForm(props) {
  const [state, setstate] = useState(initialState);
  useEffect(() => {
    //didMount + didUpdate
    return () => {
      //willUnmount
    };
  }, [state]);
  return <div data-testid="MemeForm" className={styles.MemeForm}>
    <form>
      <h1>Titre</h1>
      <input type="text" id="f_titre" placeholder="saisir titre" value={props.meme.titre} />
      <hr />
      <h2>Image</h2>
      <select value={props.meme.imageId} >
        <option value="-1">Aucune</option>
        {props.images.map((e,i)=>
                <option value={e.id}>{e.titre}</option>
            )
        }
      </select>
      <hr />
      <h2>text</h2>
      <input type="text" value={props.meme.text} />
      <div className={styles.half}>
        <div><label htmlFor="f_x">x:</label><br /><input type="number" className={styles.smallInput} value={props.meme.x} /></div>
        <div><label htmlFor="f_y">y:</label><br /><input type="number" className={styles.smallInput} value={props.meme.y} /></div>
      </div>

      <hr />
      <div className={styles.half}>
        <Button type="reset" bgColor="tomato" text="clear" />
        <Button type="submit" bgColor="skyblue" text="save" />
      </div>

    </form>
  </div>;
}

MemeForm.propTypes = {
    meme: PropTypes.object.isRequired,
    images: PropTypes.array.isRequired,

};
MemeForm.defaultProps = {};
export default MemeForm;
