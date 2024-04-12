import { write } from "bun";

const message = "I love JS!";

await write("output.txt", message);
