import { readdir, writeFile } from 'node:fs/promises';

try {
  const files = await readdir("../public");
  let paths = [];
  for (const file of files)
  	if(file.endsWith(".mp4"))
    	paths.push(`/${file}?url`);
  console.log(`${paths.length} videos found.`);
  const promise = await writeFile('paths.json', JSON.stringify(paths));

} catch (err) {
  console.error(err);
}