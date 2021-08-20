import { useState, useCallback } from 'react';

const useHttp = () => {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

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

        setSuccess(data.message);
        return data;
      } catch (e) {
        setSuccess(null);
        setError(e.message);
        throw e;
      }
    },
    []
  );

  const clearSuccess = useCallback(() => setSuccess(null), []);
  const clearError = useCallback(() => setError(null), []);

  return { request, success, error, clearSuccess, clearError };
};

export default useHttp;
