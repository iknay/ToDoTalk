/* eslint-disable no-console */
import { CONFIG } from '@/config/config';
import axios, { AxiosResponse } from 'axios';
import { IAxios } from '@/lib/typings/IAxios';

export const useAxios = () => {
  const instance = axios.create({
    baseURL: CONFIG.TODO_APP,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  instance.interceptors.request.use(
    (request) => {
      return request;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response) {
      }

      return Promise.reject(error);
    },
  );

  const GET = async <R, P = unknown, B = unknown>(
    args: IAxios<P, B>,
  ): Promise<AxiosResponse<R>> => {
    // console.log('args', args);

    return instance({
      ...args,
      method: 'GET',
    });
  };
  const POST = async <R>(args: any): Promise<AxiosResponse<R>> => {
    return instance({
      ...args,
      method: 'POST',
    });
  };

  const PUT = async <P, B>(args: IAxios<P, B>): Promise<AxiosResponse> => {
    return instance({
      ...args,
      method: 'PUT',
    });
  };

  const DELETE = async <P, B>(args: IAxios<P, B>): Promise<AxiosResponse> => {
    return instance({
      ...args,
      method: 'DELETE',
    });
  };

  return {
    instance,
    GET,
    POST,
    PUT,
    DELETE,
  };
};
