import React from 'react';
import PropTypes from 'prop-types';
import styles from './TemplateName.module.css';
import { connect } from 'react-redux';

const TemplateName = () => (
  <div className={styles.TemplateName} data-testid="TemplateName">
    {/* TemplateName Component */}
  </div>
);

TemplateName.propTypes = {

};

TemplateName.defaultProps = {};

export default connect();
