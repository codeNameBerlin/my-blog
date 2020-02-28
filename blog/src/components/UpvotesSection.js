import React from 'react';

const UpvotesSection = ({ articleName, setArticleInfo, upvotes }) => {
	const updateUpvotes = async () => {
		const result = await fetch(`/api/articles/${articleName}/upvotes`, {
		method: 'POST',
	})
		const body = await result.json();
		setArticleInfo(body)
	}
	return (
		<div id='upvotes-section'>
			<button onClick={() => updateUpvotes()}>Add Upvote</button>
			<p>This article has been upvoted {upvotes} times</p>
		</div>
		)
}

export default UpvotesSection;