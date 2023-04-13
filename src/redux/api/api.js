import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://nominatim.openstreetmap.org",
  }),
  endpoints: (build) => ({
    getMap: build.query({
      query: (coords) => ({
        url:
          "reverse?format=jsonv2&lat=" +
          coords.latitude +
          "&lon=" +
          coords.longitude,
        mode: "cors",
        method: "GET",
        headers: { "Access-Control-Allow-Origin": "https://o2cj2q.csb.app" },
      }),
    }),
  }),
});

export const { useGetMapQuery } = api;
