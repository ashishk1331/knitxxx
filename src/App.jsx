import React from "react";

import paths from "../scripts/paths.json";
import Feed from "./components/Feed";
import Header from "./components/Header";

export default function App() {
  const [page, setPage] = React.useState(0);
  const pageVideos = paths.slice(page * 12, (page + 1) * 12);

  return (
    <main className="container mx-auto">
      <Header page={page} setPage={setPage} totalLength={paths.length} />
      <Feed paths={pageVideos} page={page} />
    </main>
  );
}
