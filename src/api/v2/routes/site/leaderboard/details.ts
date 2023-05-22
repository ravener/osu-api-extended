import { types } from '../../../../../types/v2_site_leaderboard_details';
import { Description } from '../../../../../utility/types';


import { namespace, RequestNamepsace } from "../../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Gets the current ranking leaderboard for the specified type and game mode',
  params: [
    {
      type: 'string',
      name: 'mode',
      optional: false,
      description: '\`\`\`osu\`\`\` or \`\`\`fruits\`\`\` or \`\`\`mania\`\`\` or \`\`\`taiko\`\`\`',
    },
    {
      type: 'string',
      name: 'type',
      optional: false,
      description: '\`\`\`charts\`\`\` or \`\`\`country\`\`\` or \`\`\`performance\`\`\` or \`\`\`score\`\`\`',
    },
    {
      name: 'object',
      params: [
        {
          type: 'number',
          name: 'country',
          options: false,
          optional: true,
          description: 'Filter ranking by country code. Only available for \`\`\`type\`\`\` of \`\`\`performance\`\`\`',
        },
        {
          type: 'string',
          name: 'cursorPublished',
          optional: true,
          description: 'Pagination cursorPublished',
        },
        {
          type: 'number',
          name: 'cursorId',
          optional: true,
          description: 'Pagination cursorId',
        },
        {
          type: 'string',
          name: 'filter',
          optional: true,
          description: '\`\`\`all\`\`\` or \`\`\`friends\`\`\`',
        },
        {
          type: 'string',
          name: 'spotlight',
          optional: true,
          description: 'The id of the spotlight if type is charts. Ranking for latest spotlight will be returned if not specified',
        },
        {
          type: 'string',
          name: 'variant',
          options: false,
          optional: true,
          description: `Filter ranking to specified mode variant. For \`\`\`mode\`\`\` of \`\`\`mania\`\`\`, it's either \`\`\`4k\`\`\` or \`\`\`7k\`\`\`. Only available for \`\`\`type\`\`\` of \`\`\`performance\`\`\``,
        },
      ]
    },
  ],
  return: 'response',
};


const name: types = async (mode, type, obj) => {
  const data = await request(`rankings/${mode}/${type}`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;