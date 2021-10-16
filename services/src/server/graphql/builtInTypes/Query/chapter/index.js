import { Chapter } from "##/db/models";

const fetchChapter = async (_, args) => Chapter.findByPk(args.id);

export default fetchChapter;
