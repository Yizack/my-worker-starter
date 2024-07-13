import { type H3Event } from "h3";
import { defineCachedEventHandler } from "../imports";

export default defineCachedEventHandler(async (event: H3Event) => {
  return { message: "Hello, World!" };
}, { maxAge: 60 });
