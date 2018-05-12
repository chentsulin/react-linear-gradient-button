import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, fontSize, borderRadius } from 'styled-system';

import { getLinearGradient, getPadding } from './utils';

const GradientBackground = styled.button`
  position: relative;
  display: flex;
  box-sizing: border-box;
  padding: ${props => props.borderWith}px;
  border: 0;
  outline: 0;
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => getLinearGradient(props.theme, props.gradient)}
  );
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  ${borderRadius};
  ${color};
  ${fontSize};

  text-decoration: none;
`;

GradientBackground.propTypes = {
  borderWith: PropTypes.number.isRequired,
  direction: PropTypes.string.isRequired,
  gradient: PropTypes.arrayOf(PropTypes.string),
  theme: PropTypes.string.isRequired,
  ...borderRadius.propTypes,
  ...color.propTypes,
  ...fontSize.propTypes,
};

GradientBackground.defaultProps = {
  color: '#ae3560',
  fontSize: 16,
};

const Inner = styled.div`
  width: 100%;
  height: 100%;
  padding: ${props => getPadding(props.padding)};
  outline: 0;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: transparent;
    color: #fff;
  }

  ${borderRadius};
  ${color};
`;

Inner.propTypes = {
  padding: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
  ...borderRadius.propTypes,
};

const GradientButton = ({
  background: _bg,
  borderRadius: _borderRadius,
  borderWith,
  content,
  direction,
  gradient,
  padding,
  theme,
  ...props
}) => (
  <GradientBackground
    gradient={gradient}
    direction={direction}
    theme={theme}
    borderRadius={_borderRadius}
    borderWith={borderWith}
    {...props}
  >
    <Inner
      bg={_bg}
      borderRadius={_borderRadius - (borderWith + 1)}
      padding={padding}
    >
      {content}
    </Inner>
  </GradientBackground>
);

GradientButton.propTypes = {
  background: PropTypes.string,
  borderRadius: PropTypes.number,
  borderWith: PropTypes.number,
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  direction: PropTypes.string,
  gradient: PropTypes.arrayOf(PropTypes.string),
  padding: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]),
  theme: PropTypes.string,
  ...color.propTypes,
  ...fontSize.propTypes,
};

GradientButton.defaultProps = {
  background: '#fff',
  borderRadius: 20,
  borderWith: 2,
  direction: 'right',
  gradient: null,
  theme: 'Vanusa',
  padding: 10,
};

export default GradientButton;
