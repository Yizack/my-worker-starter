export default defineCachedEventHandler(async (event) => {
  return { message: "Hello, World!" };
}, { maxAge: 60 });
