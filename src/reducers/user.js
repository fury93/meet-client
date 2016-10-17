import reduxCrud from 'redux-crud'

const baseReducers = reduxCrud.reducersFor('users', {store: reduxCrud.STORE_MUTABLE});

export function userReducer(state = [], action) {
    switch (action.type) {
        default:
            return baseReducers(state, action)
    }
}

