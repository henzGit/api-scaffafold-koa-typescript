export default interface User {
    user_uuid: string;
    rid_first_name: string;
    rid_uuid: string;
    adfs_name_id: string;
    rid_username: string;
    last_login_ts: string;
    rid_last_name: string;
    accesses_changed_at: string;
    is_blocked: boolean | number;
    rid_refresh_token: string;
    is_system_owner: boolean | number;
}