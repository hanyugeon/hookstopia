function assert(condition: unknown, error: Error | string) {
  if (!condition) {
    if (typeof error === "string") {
      throw new Error(error);
    } else {
      throw error;
    }
  }
}

export { assert };
