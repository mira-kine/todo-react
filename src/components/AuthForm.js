import React from 'react';

export default function AuthForm({
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
  errorMsg,
}) {
  return (
    <form>
      <p>{errorMsg}</p>
      <div className="form-input">
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-input">
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className="submit-button">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </form>
  );
}
