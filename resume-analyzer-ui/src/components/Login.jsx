import React, { useState } from 'react';

function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isSignup, setIsSignup] = useState(false);

const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Remove any numbers or special characters, keeping only letters and spaces, then trim extra spaces
      const cleanName = name ? name.replace(/[^a-zA-Z\s]/g, '').trim() : '';
      const displayName = cleanName ? cleanName : email.split('@')[0];
      
      onLoginSuccess({ email, name: displayName });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            {isSignup ? 'Create Account' : 'Welcome Back'}
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            {isSignup ? 'Sign up to analyze your resumes with AI' : 'Log in to your AI Resume Analyzer'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              required={isSignup}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Anshu Pal"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 border border-transparent rounded-lg shadow-md text-white bg-blue-600 hover:bg-blue-700 font-semibold transition duration-200"
          >
            {isSignup ? 'Sign Up' : 'Log In'}
          </button>
        </form>

        <div className="text-center mt-6">
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-sm text-blue-600 hover:underline font-medium"
          >
            {isSignup ? 'Already have an account? Log in' : "Don't have an account? Sign up"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;