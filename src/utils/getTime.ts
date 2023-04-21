function getTime(time: number) {
  const centiseconds = Math.floor((time / 10) % 100);
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / 60000) % 60);
  const hours = Math.floor(time / 3600000);

  return {
    seconds,
    centiseconds,
    minutes,
    hours,
  };
}

export default getTime;
