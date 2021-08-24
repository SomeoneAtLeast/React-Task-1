import { useCallback } from 'react';

const useHttp = () => {
  const request = useCallback(
    async (url, method = 'GET', body = null, headers = {}) => {
      try {
        if (body) {
          body = JSON.stringify(body);
          headers['Content-Type'] = 'application/json';
        }

        const response = await fetch(url, { method, body, headers });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Что-то не так');
        }

        return data;
      } catch (e) {
        console.log(e);
      }
    },
    []
  );

  return { request };
};

export default useHttp;
