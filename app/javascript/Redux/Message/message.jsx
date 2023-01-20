import axios from  "axios";

const  GET_MESSAGES =  "GET_MESSAGES" ;
const  SHOW_MESSAGE =  "SHOW_MESSAGE" ;

const initialState = { 
    getMessages: false,
    greeting: [] 
    };

    const messageReducer = (state = initialState, action) => {
        const {payload,type}  = action;
        switch (type) {
            case GET_MESSAGES: {
                return { ...state, getMessages: true };
            }
            case SHOW_MESSAGE: {
                return { ...state, greeting: payload };
            }
            default:
                return state;
        }
    };

    export const setLoading = () => {
        return {
            type: GET_MESSAGES,
        };
    };

    export const showmessage = () => async (dispatch) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        dispatch(setLoading ());
        try {
            const res = await axios.get("/api/v1/greetings", config);
            dispatch({
                type: SHOW_MESSAGE,
                payload: res.data,
            });
        } catch (err) {
            console.log(err);
        }    
        
    };

    export default messageReducer;
