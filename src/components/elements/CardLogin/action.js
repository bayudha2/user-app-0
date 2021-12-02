import { Users } from '../../../services/api/users';
import { UserReducer } from './reducer';
import { setSessionLogin } from '../../../helpers/cookie';

export const postLoginData = (body, history) => async (dispatch) => {
    dispatch(UserReducer.actions.setLoading(true));
    Users.postLogin(body)
        .then((resp) => {
            setSessionLogin(resp);
            // dispatch(UserReducer.actions.setError(false));
        })
        .catch(() => {
            dispatch(UserReducer.actions.setError(true));
        })
        .finally(() => {
            dispatch(UserReducer.actions.setLoading(false));
            history('/');
        });
};

export const reset = () => async (dispatch) => {
    dispatch(UserReducer.actions.reset());
};

export default { postLoginData, reset };
