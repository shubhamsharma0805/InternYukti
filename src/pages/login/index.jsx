import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../../components/ui/Header';
import LanguageSwitcher from '../../components/ui/LanguageSwitcher';
import VoiceInputToggle from '../../components/ui/VoiceInputToggle';
import LoginForm from './components/LoginForm';
import SocialLogin from './components/SocialLogin';
import LoginHeader from './components/LoginHeader';
import BiometricLogin from './components/BiometricLogin';
import SecurityNotice from './components/SecurityNotice';
import RegisterPrompt from './components/RegisterPrompt';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [lockoutTime, setLockoutTime] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const navigate = useNavigate();
  const location = useLocation();

  // Mock credentials for different user types
  const mockCredentials = {
    student: { email: 'student@example.com', password: 'student123' },
    graduate: { email: 'graduate@example.com', password: 'graduate123' },
    admin: { email: 'admin@example.com', password: 'admin123' }
  };

  useEffect(() => {
    // Check if user is already authenticated
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated === 'true') {
      const from = location?.state?.from?.pathname || '/internship-results';
      navigate(from, { replace: true });
    }

    // Load language preference
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
    }

    // Check for account lockout
    const lockout = localStorage.getItem('accountLockout');
    if (lockout) {
      const lockoutData = JSON.parse(lockout);
      if (lockoutData?.until > Date.now()) {
        setIsLocked(true);
        setLockoutTime(lockoutData?.until);
      } else {
        localStorage.removeItem('accountLockout');
      }
    }

    // Load login attempts
    const attempts = localStorage.getItem('loginAttempts');
    if (attempts) {
      setLoginAttempts(parseInt(attempts, 10));
    }
  }, [navigate, location]);

  const handleLogin = async (formData) => {
    if (isLocked) {
      setError('Account is temporarily locked. Please try again later.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Check mock credentials
      const isValidCredentials = Object.values(mockCredentials)?.some(
        cred => cred?.email === formData?.email && cred?.password === formData?.password
      );

      if (isValidCredentials) {
        // Successful login
        const userData = {
          email: formData?.email,
          name: formData?.email?.split('@')?.[0]?.charAt(0)?.toUpperCase() + formData?.email?.split('@')?.[0]?.slice(1),
          loginTime: new Date()?.toISOString()
        };

        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userData', JSON.stringify(userData));
        
        if (formData?.rememberMe) {
          localStorage.setItem('rememberUser', 'true');
        }

        // Clear login attempts
        localStorage.removeItem('loginAttempts');
        localStorage.removeItem('accountLockout');

        // Navigate to intended destination
        const from = location?.state?.from?.pathname || '/internship-results';
        navigate(from, { replace: true });
      } else {
        // Failed login
        const newAttempts = loginAttempts + 1;
        setLoginAttempts(newAttempts);
        localStorage.setItem('loginAttempts', newAttempts?.toString());

        if (newAttempts >= 5) {
          // Lock account for 15 minutes
          const lockUntil = Date.now() + (15 * 60 * 1000);
          setIsLocked(true);
          setLockoutTime(lockUntil);
          localStorage.setItem('accountLockout', JSON.stringify({ until: lockUntil }));
          setError('Account locked due to too many failed attempts. Try again in 15 minutes.');
        } else {
          setError(`Invalid email or password. ${5 - newAttempts} attempts remaining.`);
        }
      }
    } catch (err) {
      setError('Login failed. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (provider) => {
    setIsLoading(true);
    setError('');

    try {
      // Simulate social login
      await new Promise(resolve => setTimeout(resolve, 2000));

      const userData = {
        email: `user@${provider}.com`,
        name: `${provider?.charAt(0)?.toUpperCase() + provider?.slice(1)} User`,
        provider: provider,
        loginTime: new Date()?.toISOString()
      };

      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userData', JSON.stringify(userData));

      const from = location?.state?.from?.pathname || '/internship-results';
      navigate(from, { replace: true });
    } catch (err) {
      setError(`${provider} login failed. Please try again.`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBiometricLogin = async (credential) => {
    setIsLoading(true);
    setError('');

    try {
      // Simulate biometric authentication
      await new Promise(resolve => setTimeout(resolve, 1000));

      const userData = {
        email: 'biometric@user.com',
        name: 'Biometric User',
        authMethod: 'biometric',
        loginTime: new Date()?.toISOString()
      };

      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userData', JSON.stringify(userData));

      const from = location?.state?.from?.pathname || '/internship-results';
      navigate(from, { replace: true });
    } catch (err) {
      setError('Biometric authentication failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVoiceResult = (transcript) => {
    // Simple voice command processing
    const lowerTranscript = transcript?.toLowerCase();
    if (lowerTranscript?.includes('login') || lowerTranscript?.includes('sign in')) {
      document.querySelector('button[type="submit"]')?.click();
    } else if (lowerTranscript?.includes('register') || lowerTranscript?.includes('sign up')) {
      navigate('/register');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <main className="pt-16 pb-8">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-xl shadow-modal border border-border p-8 animate-fade-in">
            {/* Header */}
            <LoginHeader />

            {/* Language Switcher */}
            <div className="flex justify-center mt-6 mb-8">
              <LanguageSwitcher />
            </div>

            {/* Security Notice */}
            <SecurityNotice 
              attempts={loginAttempts}
              isLocked={isLocked}
              lockoutTime={lockoutTime}
            />

            {/* Login Form */}
            <LoginForm 
              onLogin={handleLogin}
              isLoading={isLoading}
              error={error}
            />

            {/* Social Login */}
            <div className="mt-6">
              <SocialLogin 
                onSocialLogin={handleSocialLogin}
                isLoading={isLoading}
              />
            </div>

            {/* Biometric Login */}
            <BiometricLogin 
              onBiometricLogin={handleBiometricLogin}
              isLoading={isLoading}
            />

            {/* Register Prompt */}
            <RegisterPrompt />
          </div>
        </div>
      </main>

      {/* Voice Input Toggle */}
      <VoiceInputToggle 
        onVoiceResult={handleVoiceResult}
        onVoiceStart={() => {}}
        onVoiceEnd={() => {}}
        position="fixed"
      />
    </div>
  );
};

export default Login;