import { useEffect, useMemo, useState } from "react";
import Pusher from "pusher-js";
import axios from "axios";

export const usePusher = (channelName, eventName) => {
  const [data, setData] = useState([]);

  const pusher = useMemo(() => {
    return new Pusher(import.meta.env.VITE_PUSHER_APP_KEY, {
      cluster: import.meta.env.VITE_PUSHER_CLUSTER,
      forceTLS: true,
    });
  }, []);

  const channel = useMemo(() => {
    return pusher.subscribe(channelName);
  }, [channelName]);

  const sendMessage = async (message) => {
    try {
      const { data } = await axios.post(
        "https://candidate.yewubetsalone.com/api/send-message",
        {
          message,
        }
      );

      console.log("Data => ", data);
      channel.bind("my-event", (event) => {
        console.log("Event => ", event);
      });
    } catch (error) {
      console.log("Error => ", error);
    }
  };

  useEffect(() => {
    channel.bind(eventName, (message) => {
      setData((prevData) => [...prevData, message]);
      console.log("Event => ", message);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [eventName]);

  return { messages: data, sendMessage, channel };
};

export default usePusher;
