const chapterCounter = [];

export const getStartingArticle = (chapterIndex) => {
  return chapterCounter
    .slice(0, chapterIndex - 1)
    .reduce((av, cv) => av + cv, 0);
};

export const insertChapter = (index, length) => {
  chapterCounter[index - 1] = length;
};
