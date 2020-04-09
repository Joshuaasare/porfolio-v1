/**
 * @Author: Joshua Asare <joshuaasare>
 * @Date:   2019-07-31 15:49:25
 * @Last modified by:   joshuaasare
 * @Last modified time: 2019-09-03 09:02:36
 */
import React from 'react';
import PropTypes from 'prop-types';
import './css/GenericButton.css';

const GenericButton = (props) => {
  function renderSize(width, height, fluid) {
    if (fluid) {
      return {
        width: '100%',
        height: `${height}rem`,
        borderRadius: '2px',
      };
    }
    return {
      width: `${width}rem`,
      height: `${height}rem`,
      borderRadius: '2px',
    };
  }

  function renderColor() {
    if (props.borderColor) {
      return {
        border: `1px solid ${props.borderColor}`,
      };
    }

    return {
      backgroundColor: props.backgroundColor,
    };
  }
  const {
 text, width, height, textColor, onClick, fluid 
} = props;
  return (
    <div
      style={{
        ...renderSize(width, height, fluid),
        ...renderColor(),
        ...styles.buttonContainer,
      }}
      className="generic-button"
      onClick={onClick}
    >
      <span style={{ ...styles.textStyle, color: textColor }}>{text}</span>
    </div>
  );
};

GenericButton.propTypes = {
  backgroundColor: PropTypes.string,
  text: PropTypes.string.isRequired,
  width: PropTypes.number || PropTypes.string,
  height: PropTypes.number,
  textColor: PropTypes.string,
  borderColor: PropTypes.string,
  onClick: PropTypes.func,
  fluid: PropTypes.bool,
};

GenericButton.defaultProps = {
  backgroundColor: '#fff',
  width: 14,
  height: 4.5,
  textColor: '#000',
  borderColor: null,
  fluid: false,
  onClick: () => {},
};

const styles = {
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyle: {
    fontWeight: '800',
    fontSize: '1.5rem',
  },
};

export { GenericButton };
