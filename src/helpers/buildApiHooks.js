import React from "react";

export const fetchBaseQuery = ({ baseUrl, headers }) => {
  return async (query, options) => {
    return await fetch(`${baseUrl}${query}`, {
      ...options,
      headers: headers,
    });
  };
};

export const buildHooks = (queryArray, baseQuery) => {
  const hooks = {};
  queryArray.forEach((item) => {
    let hookName = `use${item.name}`;

    let useQuery = () => {
      const [loading, setLoading] = React.useState(true);
      const [error, setError] = React.useState(false);
      const [data, setData] = React.useState([]);
      React.useEffect(() => {
        setLoading(true);
        baseQuery(item.query)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setData(data);
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false);
            setError(err);
          });
      }, []);
      return { loading, error, data };
    };

    const useMutation = () => {
      const [loading, setLoading] = React.useState(true);
      const [error, setError] = React.useState(false);
      const [data, setData] = React.useState([]);

      const mutationCallBack = function (body = {}) {
        return baseQuery(item.query, {
          method: item.method,
          body: JSON.stringify(body),
        })
          .then((res) => {
            setLoading(true);
            return res.json();
          })
          .then((data) => {
            setData(data);
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false);
            console.log(err);
            setError(err);
          });
      };

      React.useEffect(() => {
        mutationCallback();
      }, [loading, error]);

      return [
        mutationCallBack,
        {
          loading,
          error,
          data,
        },
      ];
    };

    if (item.type === "query") {
      console.log("hello from query");
      hooks[hookName] = useQuery;
    } else if (item.type === "mutation") {
      console.log("hello from mutation");
      hooks[hookName] = useMutation;
    }
    // hooks[hookName] = makeHook;
  });
  return hooks;
};
