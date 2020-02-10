exports.getOne = id => new Promise(resolve => {
  process.nextTick(() => resolve({ id }));
});