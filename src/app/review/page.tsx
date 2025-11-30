import React, { useState } from 'react';

export default function ReviewPage() {
  const [review, setReview] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Placeholder: send review to API
    setResult('AI review result will appear here.');
  };

  return (
    <div>
      <h1>Submit a Review</h1>
      <form onSubmit={handleSubmit}>
        <textarea value={review} onChange={e => setReview(e.target.value)} rows={5} cols={40} />
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>{result}</div>
    </div>
  );
}
