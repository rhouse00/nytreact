import mongoose from 'mongoose';

const Schema = mongoose.schema;

const ArticleSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});
const Article = mongoose.model('Article', ArticleSchema);

export default Article;
