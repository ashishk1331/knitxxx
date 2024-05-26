import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Avvvatars from "avvvatars-react";
import { ArrowUp, ArrowDown } from "@phosphor-icons/react";

export default function Feed({ paths, page }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 p-4 py-8">
      {paths.map((path, index) => (
        <Post src={path} key={index} />
      ))}
    </div>
  );
}

function Post(props) {
  const NAME = "admin";
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [dissed, setDissed] = useState(false);
  return (
    <div className="w-full">
      <div className="w-full aspect-video bg-gray-500">
        <video src={props.src} controls className="w-full object-cover"></video>
      </div>
      <div className="w-full flex flex-col items-left gap-2 py-4 rounded-b">
        <div className="w-full flex items-center gap-4">
          <div className="ml-2">
            <Avvvatars style="shape" value={NAME} size={48} />
          </div>
          <div className="w-full flex flex-col items-left">
            <h1>by {NAME}</h1>
            <span className="text-sm text-zinc-500">Aug 18</span>
          </div>
          <div className="h-max flex items-center gap-1 rounded p-1">
            <button
              className={twMerge("p-2", liked && "text-green-500")}
              onClick={(e) => {
                let new_value = !liked;
                setLiked(new_value);
                if (new_value) {
                  setDissed(false);
                  setCount((prev) => prev + 1);
                } else {
                  setCount((prev) => Math.max(0, prev - 1));
                }
              }}
            >
              <ArrowUp size={20} />
            </button>
            <span className="text-lg">{count}</span>
            <button
              className={twMerge("p-2", dissed && "text-red-500")}
              onClick={(e) => {
                let new_value = !dissed;
                setDissed(new_value);
                if (new_value) {
                  setLiked(false);
                  setCount((prev) => Math.max(0, prev - 1));
                }
              }}
            >
              <ArrowDown size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
