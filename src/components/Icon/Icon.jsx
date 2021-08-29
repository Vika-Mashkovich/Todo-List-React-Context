import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as EditIcon } from './svg/edit.svg';
import { ReactComponent as DeleteIcon } from './svg/delete.svg';
import { ReactComponent as SaveIcon } from './svg/check-solid.svg';
import { ReactComponent as CloseIcon } from './svg/close.svg';

const TypeToIconMap = {
  edit: <EditIcon />,
  delete: <DeleteIcon />,
  save: <SaveIcon />,
  close: <CloseIcon />,
};

const Icon = ({ type }) => (<>{TypeToIconMap[type]}</>);

Icon.propTypes = { type: PropTypes.string };
Icon.defaultProps = { type: '' };

export default Icon;
