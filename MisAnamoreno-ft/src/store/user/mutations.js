export function setUser (state, user) {
    state.username = user.username;
    state.type = user.type;
    state.id = user.id;
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