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
      <input type="text" id="f_titre" placeholder="saisir titre" value={props.meme.titre} onChange={ (evt)=>
          props.onMemeChange({...props.meme, titre:evt.target.value})
      }/>
      <hr />
      <h2>Image</h2>
      <select value={props.meme.imageId} onChange={ (evt)=>
          props.onMemeChange({...props.images, imageId:Number(evt.target.value)})
      }>
        <option value="-1">Aucune</option>
        {props.images.map((e,i)=>
                <option value={e.id}>{e.titre}</option>
            )
        }
      </select>
      <hr />
      <h2>text</h2>
      <input type="text" value={props.meme.text} onChange={ (evt)=>
          props.onMemeChange({...props.meme, text:evt.target.value})
      }/>
      <div className={styles.half}>
        <div><label htmlFor="f_x">x:</label><br /><input type="number" className={styles.smallInput} value={props.meme.x} onChange={ (evt)=>
          props.onMemeChange({...props.meme, x:evt.target.value})
        }/></div>
        <div><label htmlFor="f_y">y:</label><br /><input type="number" className={styles.smallInput} value={props.meme.y} onChange={ (evt)=>
          props.onMemeChange({...props.meme, y:evt.target.value})
      }/></div>
      </div>

        <label htmlFor="f_color">Couleur</label><input type="color" id="f_color" value={props.meme.color} onChange={ (evt)=>
                    props.onMemeChange({...props.meme, color:evt.target.checked})
        }></input>
        <div className={styles.half}>
            <div>
                <label htmlFor="f_underline">Underline</label><input type="checkbox" id="f_underline" checked={props.meme.underline} onChange={ (evt)=>
                    props.onMemeChange({...props.meme, underline:evt.target.checked})
                }></input>
            </div>
            <div>
                <label htmlFor="f_italic">italic</label><input type="checkbox" id="f_italic" checked={props.meme.italic} onChange={ (evt)=>
                    props.onMemeChange({...props.meme, italic:evt.target.checked})
                }></input>
            </div>
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
    onMemeChange: PropTypes.func.isRequired,
};
MemeForm.defaultProps = {};
export default MemeForm;
