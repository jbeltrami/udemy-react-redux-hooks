import React from 'react';
import PropTypes from 'prop-types';
import useResources from './useResources';

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);
  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
ResourceList.propTypes = {
  resource: PropTypes.string,
};
