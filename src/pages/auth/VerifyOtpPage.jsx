import React from 'react';

const VerifyOtpPage = () => {
  return (
    <div>
      <h1>Verify OTP</h1>
      <p>Please enter the OTP sent to your email address.</p>
      <form>
        <input type="text" placeholder="Enter OTP" required />
        <button type="submit">Verify</button>
      </form>
    </div>
  );
};

export default VerifyOtpPage;