import { types } from '../../../../types/v2_comments_edit';
import { Description } from '../../../../utility/types';


import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Edit your comment by id',
  params: [
    {
      type: 'number',
      name: 'comment_id',
      description: 'Comment id',
    },
    {
      type: 'string',
      name: 'message',
      description: 'Text of the message',
    },
  ],
  return: 'response',
};

// @ts-ignore
const name: types = async (comment_id, message) => {
  const data = await request(`comments/${comment_id}`, {
    method: 'PUT',
    params: {
      'comment[message]': message,
    },
  });

  return data;
};


export default name;