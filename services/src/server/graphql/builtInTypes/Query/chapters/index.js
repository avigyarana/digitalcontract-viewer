import { Chapter } from "##/db/models";

const fetchAllChapters = async () => Chapter.findAll();

export default fetchAllChapters;
