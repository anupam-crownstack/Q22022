const API_URI = "https://countries.trevorblades.com";

const fetchQuery = async (query, variables) => {
  let errorStatus = false,
    errorMessage,
    data;
  try {
    const response = await fetch(API_URI, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    data = await response.json();
  } catch (error) {
    errorStatus = true;
    errorMessage = error;
  }

  if (errorStatus) return [errorStatus, errorMessage];
  else return [errorStatus, data];
};

export default fetchQuery;
