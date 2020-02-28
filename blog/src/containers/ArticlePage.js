import React, { useState, useEffect } from 'react';
import articlesContent from './article-content';
import ArticleList from '../components/ArticleList';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';
import AddCommentForm from '../components/AddCommentForm';

const ArticlePage = ({ match }) => {
	const name = match.params.name;
	const article = articlesContent.find(article => article.name === name);
	const otherArticles = articlesContent.filter(article => article.name !== name)

	const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

	useEffect(() => {
		const fetchData = async () => {
			const result = await fetch(`/api/articles/${name}`);
			const body = await result.json();
			console.log(body);
			setArticleInfo(body);
		}
		fetchData();
		}, [name])

	if (!article) return <h1>Sorry, No Such Article</h1>

	return (
	 <>
		<h1>{article.title}</h1>
		<UpvotesSection 
		articleName={name} 
		setArticleInfo={setArticleInfo} 
		upvotes={articleInfo.upvotes} 
		/>
		{article.content.map((paragraph, key) => (
			<p key={key}>{paragraph}</p>
		))}
		<CommentsList comments={articleInfo.comments} />
		<AddCommentForm 
		articleName={name} 
		setArticleInfo={setArticleInfo} 
		/>
		<h3>Other Articles:</h3>
		<ArticleList articles={otherArticles} />
	 </>
	); 
}

export default ArticlePage;