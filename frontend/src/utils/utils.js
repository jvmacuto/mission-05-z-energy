export const getRandomizedOptions = (options, maxOptions = 3) => {
  const flatOptions = options.flatMap((group) => group.options);
  const shuffledOptions = flatOptions.sort(() => 0.5 - Math.random());
  return shuffledOptions.slice(0, maxOptions);
};
