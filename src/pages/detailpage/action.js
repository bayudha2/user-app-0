import { Users } from '../../services/api/users';
import { UserReducer } from '../../components/elements/CardLogin/reducer';

export const getUserData = (id) => async (dispatch) => {
    dispatch(UserReducer.actions.setLoading(true));
    Users.getUser(id)
        .then((response) => {
            dispatch(UserReducer.actions.setUser(response.data));
        })
        .catch(() => {
            dispatch(UserReducer.actions.setError(true));
        })
        .finally(() => {
            dispatch(UserReducer.actions.setLoading(false));
        });
};

export const reset = () => async (dispatch) => {
    dispatch(UserReducer.actions.reset());
};

export default {
    getUserData, reset,
};
