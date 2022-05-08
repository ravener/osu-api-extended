import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: any = {
  type: false,
  auth: 1,
  title: __filename,
  method: 'POST',
  description: 'Return list of beatmap favourites',
  params: [
    {
      type: 'number',
      name: 'beatmapset_id',
      optional: false,
      description: 'id of the beatmap set',
    },
  ],
};

export interface types {
  (beatmapset_id: number): Promise<response[]>;
};

export interface response {
  ask: 'peppy';
};


const name: types = async (beatmapset_id) => {
  const data = await request(`beatmapsets/${beatmapset_id}/favourites`, {
    method: 'POST',
  });

  return data;
};


export default name;