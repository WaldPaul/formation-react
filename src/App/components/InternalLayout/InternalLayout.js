import React from 'react';
import PropTypes from 'prop-types';
import styles from './InternalLayout.module.css';

const InternalLayout = (props) => (
  <div className={styles.InternalLayout} data-testid="InternalLayout">
    {props.children}
  </div>
);

InternalLayout.propTypes = {};

InternalLayout.defaultProps = {};

export default InternalLayout;
