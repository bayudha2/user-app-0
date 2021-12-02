import { Users } from '../../services/api/users';
import { UserReducer } from '../../components/elements/CardLogin/reducer';

export const getData = () => async (dispatch) => {
    dispatch(UserReducer.actions.setLoading(true));
    Users.getUsers()
        .then((response) => {
            dispatch(UserReducer.actions.setData(response.data));
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
    getData, reset,
};
