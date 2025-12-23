


import CreatePost from "./CreatePost";
import Tweet from "./Tweet";

import { useSelector } from "react-redux";
import UseGetProfile from "../hooks/UseGetProfile";


const Feed = () => {
  const { user } = useSelector(store => store.user)
  UseGetProfile(user._id);  
  return (
    <div className="w-full">
      <CreatePost />

      <Tweet />
    </div>
  );
};

export default Feed;
