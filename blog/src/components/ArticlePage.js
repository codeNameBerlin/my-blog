import React from 'react';
import articlesContent from './article-content';
import ArticleList from './ArticleList';

const ArticlePage = ({ match }) => {
	const name = match.params.name;
	const article = articlesContent.find(article => article.name === name);
	const otherArticles = articlesContent.filter(article => article.name !== name)

	if (!article) return <h1>Sorry, No Such Article</h1>

	return (
	 <>
		<h1>{article.title}</h1>
		{article.content.map((paragraph, key) => (
			<p key={key}>{paragraph}</p>
		))}
		<h3>Other Articles:</h3>
		<ArticleList articles={otherArticles} />
	 </>
	); 
}

export default ArticlePage;