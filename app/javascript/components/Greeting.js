import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import { getAllGreetings, fetchGeetingAsyncThank } from "./redux/reducer";
import { getAllGreetings, fetchGeetingAsyncThank } from "../redux/reducer";

function Greeting() {
    const greetList = useSelector(getAllGreetings);
    console.log(greetList)
  const dispatch = useDispatch();
  useEffect(() => {
      if (greetList.length === 0 )
        dispatch(fetchGeetingAsyncThank());
  }, [dispatch]);

    return <ul>
        Top {greetList.length} greetings
        {greetList.map((greeting) => (
            <li>{greeting.message}</li>
        )
        )}
    </ul>;
}

export default Greeting;
