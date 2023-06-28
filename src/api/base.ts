import axios from "axios";



const apiClient = axios.create();
apiClient.interceptors.request.use((config : any) => {
    return ({
      ...config,
      headers: {
        "Allow-Control-Allow-Origin": "*", // Required for CORS support to work
      },
    })
  },
  error => Promise.reject(error),
);

apiClient.interceptors.response.use((response) =>
    response,
  async (error) => {
    return Promise.reject(error.response.data);
  },
);

const { get, post, put, delete: destroy } = apiClient;
export { get, post, put, destroy };