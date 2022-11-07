// is page reached bottom
const isReachedBottom = () => {
  // 100 for decrease compare scrollHeight
  const scrollHeight = document.body.scrollHeight - 100;
  if (window.innerHeight + window.scrollY > scrollHeight) {
    return true;
  }
  return false;
};

export { isReachedBottom };
