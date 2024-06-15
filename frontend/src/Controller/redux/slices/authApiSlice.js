import { apiSlice } from "./apiSlice";

const API_URI="/user";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        login:builder.mutation({
            query:(data) => ({
                url: `${AUTH_URI}/login`,
                method:"POST",
                body: data,
                credentials:true,
            })
        })
    })
})

export const { useLoginMutation } = authApiSlice;