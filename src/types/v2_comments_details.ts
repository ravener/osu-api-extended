export interface response {
  comments: {
    id: number;
    parent_id: string;
    user_id: number;
    pinned: boolean;
    replies_count: number;
    votes_count: number;
    commentable_type: string;
    commentable_id: number;
    legacy_name: string;
    created_at: string;
    updated_at: string;
    deleted_at: string;
    edited_at: string;
    edited_by_id: string;
    message: string;
    message_html: string;
  }[];
  has_more: boolean;
  has_more_id: number;
  included_comments: {
    id: number;
    parent_id: number;
    user_id: number;
    pinned: boolean;
    replies_count: number;
    votes_count: number;
    commentable_type: string;
    commentable_id: number;
    legacy_name?: string;
    created_at: string;
    updated_at: string;
    deleted_at?: string;
    edited_at?: string;
    edited_by_id?: string;
    message?: string;
    message_html?: string;
  }[];
  pinned_comments: [];
  user_votes: [];
  user_follow: boolean;
  users: {
    avatar_url: string;
    country_code: string;
    default_group: string;
    id: number;
    is_active: boolean;
    is_bot: boolean;
    is_deleted: boolean;
    is_online: boolean;
    is_supporter: boolean;
    last_visit: string;
    pm_friends_only: boolean;
    profile_colour: string;
    username: string;
  }[];
  sort: string;
  cursor: {
    created_at: string;
    id: number;
  };
  commentable_meta: {
    current_user_attributes: {
      can_new_comment_reason: string;
    };
    id?: number;
    type?: string;
    title: string;
    url?: string;
    owner_id?: number;
    owner_title?: string;
  }[];
}


export interface types {
  /**
   * Gets a comment and its replies up to 2 levels deep
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login(CLIENT_ID, CLIENT_SECRET);
   *
   *   const v2_comments_details = await v2.comments.details(comment);
   *   console.log(v2_comments_details);
   * };
   * 
   * main();
   * ```
   * @param {number} comment id of the comment
  */
  (comment: number): Promise<response[]>;
}
