import { defineEventHandler, type H3Event } from "h3";

export default defineEventHandler(async (event: H3Event) => {
  return { message: "Hello, World!" };
});
