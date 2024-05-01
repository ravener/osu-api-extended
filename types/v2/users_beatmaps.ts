export interface UsersBeatmapsResponse {
  artist?: string
  artist_unicode?: string
  covers?: Covers
  creator?: string
  favourite_count?: number
  hype?: Hype
  id?: number
  nsfw?: boolean
  offset?: number
  play_count?: number
  preview_url?: string
  source?: string
  spotlight?: boolean
  status?: string
  title?: string
  title_unicode?: string
  track_id?: number
  user_id?: number
  video?: boolean
  bpm?: number
  can_be_hyped?: boolean
  deleted_at: any
  discussion_enabled?: boolean
  discussion_locked?: boolean
  is_scoreable?: boolean
  last_updated?: string
  legacy_thread_url?: string
  nominations_summary?: NominationsSummary
  ranked?: number
  ranked_date?: string
  storyboard?: boolean
  submitted_date?: string
  tags?: string
  availability?: Availability
  beatmaps?: Beatmap[]
  beatmap_id?: number
  count?: number
  beatmap?: Beatmap2
  beatmapset?: Beatmapset
}

export interface Covers {
  cover: string
  "cover@2x": string
  card: string
  "card@2x": string
  list: string
  "list@2x": string
  slimcover: string
  "slimcover@2x": string
}

export interface Hype {
  current: number
  required: number
}

export interface NominationsSummary {
  current: number
  required: number
}

export interface Availability {
  download_disabled: boolean
  more_information: any
}

export interface Beatmap {
  beatmapset_id: number
  difficulty_rating: number
  id: number
  mode: string
  status: string
  total_length: number
  user_id: number
  version: string
  accuracy: number
  ar: number
  bpm: number
  convert: boolean
  count_circles: number
  count_sliders: number
  count_spinners: number
  cs: number
  deleted_at: any
  drain: number
  hit_length: number
  is_scoreable: boolean
  last_updated: string
  mode_int: number
  passcount: number
  playcount: number
  ranked: number
  url: string
  checksum: string
}

export interface Beatmap2 {
  beatmapset_id: number
  difficulty_rating: number
  id: number
  mode: string
  status: string
  total_length: number
  user_id: number
  version: string
}

export interface Beatmapset {
  artist: string
  artist_unicode: string
  covers: Covers2
  creator: string
  favourite_count: number
  hype: any
  id: number
  nsfw: boolean
  offset: number
  play_count: number
  preview_url: string
  source: string
  spotlight: boolean
  status: string
  title: string
  title_unicode: string
  track_id?: number
  user_id: number
  video: boolean
}

export interface Covers2 {
  cover: string
  "cover@2x": string
  card: string
  "card@2x": string
  list: string
  "list@2x": string
  slimcover: string
  "slimcover@2x": string
}