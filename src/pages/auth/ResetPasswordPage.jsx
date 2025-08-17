import React from "react";

const ResetPasswordPage = () => {
  return (
    <div>
      <h1>Reset Password</h1>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="New Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
