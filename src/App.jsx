import paths from "../scripts/paths.json";
import Feed from "./components/Feed";
import Header from "./components/Header";

export default function (props) {
  return (
    <main className="container mx-auto">
      <Header />
      <Feed paths={paths} />
    </main>
  );
}
