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

    let useQuery = (urlParams = "") => {
      const [loading, setLoading] = React.useState(true);
      const [error, setError] = React.useState(false);
      const [data, setData] = React.useState(null);
      React.useEffect(() => {
        console.log("useQuery: ", item.name);
        setLoading(true);
        baseQuery(`${item.query}/${urlParams}`)
          .then((res) => {
            console.log(res);
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

    const useMutation = (urlParams = "") => {
      const [loading, setLoading] = React.useState(false);
      const [error, setError] = React.useState(false);
      const [data, setData] = React.useState([]);

      const mutationCallBack = React.useCallback(
        (body = {}, urlParams = "") => {
          setLoading(true);
          baseQuery(`${item.query}/${urlParams}`, {
            method: item.method,
            body: JSON.stringify(body),
          })
            .then((res) => {
              console.log(res);
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
        },
        []
      );

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
      hooks[hookName] = useQuery;
    } else if (item.type === "mutation") {
      hooks[hookName] = useMutation;
    }
    // hooks[hookName] = makeHook;
  });
  return hooks;
};
