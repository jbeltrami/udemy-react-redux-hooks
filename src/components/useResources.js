import axios from 'axios';
import { useState, useEffect } from 'react';

const useResources = resource => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    /* this ((param) => {console.log(param)})(param) syntax means a declaration, followed by invocation of an annonymous function. This function is not held in a variable and can't be re-used */
    (async param => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${param}`
      );

      setResources(response.data);
    })(resource);
  }, [resource]);

  return resources;
};

export default useResources;
