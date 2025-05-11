export function setUser (state, user) {
    state.hash_id = user.hash_id;
    state.username = user.username;
    state.profile = user.profile;
    state.permissions = user.permissions;
    state.is_admin = user.is_admin;
}

export function deleteUser (state) {
    state.hash_id = null;
    state.username = null;
    state.profile = null;
    state.permissions = null;
}

export function setUserType(state, userType) {
    state.type = userType;
}

export function setUserId(state, userId) {
    state.id = userId;
}