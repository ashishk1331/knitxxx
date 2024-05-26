import KISS from "../assets/kiss.svg";

export default function Header({ setPage, totalLength, page }) {
	return (
		<header className="w-full p-4 flex flex-wrap items-center justify-between">
			<h1 className="font-bold text-4xl flex items-center">
				KNIT
				<img src={KISS} className="w-16 h-16" />
				XXX
			</h1>
			<div className="space-x-4">
				<button
					className="bg-sky-300 hover:bg-sky-400 text-gray-800 font-medium py-2 px-4 rounded inline-flex items-center gap-2 disabled:bg-sky-800/50"
					onClick={() =>
						setPage((page) => {
							if (page === 0) return 0;
							else return page - 1;
						})
					}
					disabled={page === 0}
				>
					Prev
				</button>
				<button
					className="bg-sky-300 hover:bg-sky-400 text-gray-800 font-medium py-2 px-4 rounded inline-flex items-center gap-2 disabled:bg-sky-800/50"
					onClick={() =>
						setPage((page) => {
							if ((page + 1) * 12 >= totalLength) return page;
							return page + 1;
						})
					}
					disabled={(page + 1) * 12 >= totalLength}
				>
					Next
				</button>
			</div>
		</header>
	);
}
