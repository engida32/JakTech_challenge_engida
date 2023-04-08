import { useEffect, useMemo, useState } from "react";
import Pusher from "pusher-js";
import axios from "axios";

export const usePusher = (channelName, eventName) => {

    const [data, setData] = useState([]);

    const pusher = useMemo(() => {
        return new Pusher('eef8a931edaf78b855ef', {
            cluster: 'ap2',
        });
    }, []);

    const channel = useMemo(() => {
        return pusher.subscribe(channelName);
    }, [channelName]);




    const sendMessage = (message) => {

        const { data } = axios.post("https://candidate.yewubetsalone.com/api/send-message", {
            message
        })
        console.log("Data => ", data);


    };


    useEffect(() => {

        channel.bind(eventName, (message) => {
            setData((prevData) => [...prevData, message]);
            console.log("Event => ", data, message);
        });

        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        };
    }, [eventName]);


    return { messages: data, sendMessage }
};

export default usePusher;