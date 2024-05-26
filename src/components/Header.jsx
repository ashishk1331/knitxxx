import { UploadSimple } from "@phosphor-icons/react";
import KISS from "../assets/kiss.svg";

export default function (props) {
	return (
		<header className="w-full p-4 flex items-center justify-between">
			<h1 className="font-bold text-4xl flex items-center">
				KNIT
				<img src={KISS} className="w-16 h-16" />
				XXX
			</h1>
			{/*<button className="bg-sky-300 hover:bg-sky-400 text-gray-800 font-medium py-2 px-4 rounded inline-flex items-center gap-2">
				<UploadSimple size={18} weight="bold" />
				<span>Upload</span>
			</button>*/}
		</header>
	);
}
