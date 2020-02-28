import React, { useState } from 'react'

const AddCommentForm = ({ articleName, setArticleInfo }) => {

	const [username, setUsername] = useState('');
	const [comment, setComment] = useState('');

	const SubmitComment = async () => {
		const result = await fetch(`/api/articles/${articleName}/add-comment`, {
			method: 'POST',
			body: JSON.stringify({username, text: comment}),
			headers: {
				'Content-Type': 'application/json',
			}
		})
			const body = await result.json();
			setArticleInfo(body);
			setUsername('');
			setComment('');
	}

	return (
		<div id='add-comment-form'>
			<h3>Add Comment</h3>
			<label>
				Name:
				<input type='text'
				value={username}
				onChange={(event) => setUsername(event.target.value)} 
				/>
			</label>
			<label>
				Comment:
				<textarea rows='4' 
				cols='50' 
				value={comment} 
				onChange={(event) => {setComment(event.target.value)}}
				/>
			</label>
			<button 
			onClick={() => SubmitComment()}>
			Submit Comment
			</button>
		</div>
	)
}

export default AddCommentForm;