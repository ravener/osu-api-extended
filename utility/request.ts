// PACKAGES
import https from 'https';
import querystring from 'node:querystring';
// import fs from "fs";


// CREDENTIALS
import * as auth from "./auth";


// TYPES
interface RequestParams {
  method?: string;
  params?: { [key: string]: any };
  headers?: { [key: string]: string };
  data?: string;
};

export interface RequestType {
  (url: string, params: {
    method: string,
    data?: string,
    headers?: { [key: string]: string },
    params?: object | [object, ...object[]];
  }): Promise<any>;
};


// VALUES
const TIMEOUT_MS = 60000;
let total_retries = 0;



export const request = (url: string, { method, headers, data, params = {} }: RequestParams = {}): Promise<any> => new Promise((resolve, reject) => {
  // check required args
  if (url == null)
    throw new Error('URL not specified');

  if (method == null)
    throw new Error('Method not specified');


  // V1 add credentials
  if (url.includes('https://osu.ppy.sh/api/') && !url.includes('https://osu.ppy.sh/api/v2'))
    params.k = params.v1 || auth.cache_tokens.v1;

  // V2 add credentials
  if (url.includes('https://osu.ppy.sh/api/v2'))
    headers = {
      // @ts-ignore
      Authorization: `Bearer ${params.v2 || auth.cache_tokens.v2}`,
      Accept: `application/json`,
      'Content-Type': `application/json`,
    };


  const generate_query = querystring.encode(params);
  const build_url = url + (generate_query ? `?${generate_query}` : '');

  // console.log({ url: build_url, method, headers, data });
  const req = https.request(build_url, { method, headers }, (response) => {
    const chunks: any[] = [];

    // handle response events
    response.on('data', (chunk: any) => chunks.push(chunk));
    response.on('end', async () => {
      const data = Buffer.concat(chunks).toString();

      if (/^application\/json/.test(response.headers['content-type'])) {
        try {
          const parse = JSON.parse(data);
          if (parse.authentication === 'basic' && auth.cache_tokens.v1 && total_retries < 3) {
            await auth.refresh_token();
            total_retries++;


            const retry_request = await request(url, { method, headers, data, params });
            return resolve(retry_request);
          };


          total_retries = 0;
          return resolve(parse);
        } catch (error) {
          reject(error);
        };
      };


      resolve(data);
    });
  });


  // throw error
  req.on('error', reject);

  // timeout
  req.setTimeout(TIMEOUT_MS, () => {
    req.destroy();
    reject(new Error(`Request to ${build_url} time out after ${TIMEOUT_MS}ms`));
  });


  // write body to request, if specified
  if (data) req.write(data);
  req.end();
});