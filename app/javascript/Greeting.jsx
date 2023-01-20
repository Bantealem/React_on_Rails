import React, {useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { showmessage } from './Redux/Message/message';


const Greeting = () => { 
    const {greeting, loading} = useSelector(state => state.message);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(showmessage());
    }
    , [dispatch]);
    return (
        <div>
            {loading ? <h1>Loading...</h1> : greeting.map((greet) => <h1 key={greet.id}>{greet.greeting}</h1>)}
        </div>
    );
}

export default Greeting;