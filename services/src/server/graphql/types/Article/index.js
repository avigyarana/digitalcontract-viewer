import { Chapter, Section } from "##/db/models";

export default {
  chapter: async (article) => Chapter.findByPk(article.chapterId),
  sections: async (article) =>
    Section.findAll({ where: { articleId: article.id } }),
};
