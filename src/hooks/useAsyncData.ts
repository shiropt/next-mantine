/* eslint-disable react-hooks/rules-of-hooks */
import axios, { AxiosError } from "axios";
import useSWRImmutable from "swr/immutable";
import type { AxiosResponse } from "axios";
import { ErrorResponse } from "../types";

export const getResponse = async <T>(action: () => Promise<AxiosResponse<T>>) => {
  try {
    const response = await action();
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    }
  }
};

export const postData = async <T>(url: string, params: unknown) => {
  return await getResponse<T>(() => axios.post<T>(url, params));
};

export const putData = async <T>(url: string, params: unknown) => {
  return await getResponse<T>(() => axios.put<T>(url, params));
};

export const deleteData = async <T>(url: string, id: string) => {
  return await getResponse<T>(() => axios.delete<T>(url, { data: { id } }));
};

const fetcher = async <T>(url: string): Promise<T> => {
  const res = await fetch(url);
  if (!res.ok) {
    const errorObject: ErrorResponse = { statusCode: res.status, message: res.statusText };
    throw errorObject;
  }
  return res.json();
};

export const useFetch = <T>(url: string, shouldFetch: boolean = true) => {
  const { data, error } = useSWRImmutable<T, ErrorResponse>(shouldFetch ? url : null, fetcher);
  if (error && error.statusCode === 500) {
    throw new Error(error.message);
  }

  return { data, isLoading: !error && !data && shouldFetch, error };
};
