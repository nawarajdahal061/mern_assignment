import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../navbar/navbar';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Common Styles to keep code clean
  const labelStyle = {
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '4px'
  };

  const inputStyle = (hasError) => ({
    width: '100%',
    padding: '12px',
    backgroundColor: '#f8fafc',
    borderRadius: '12px',
    border: `1px solid ${hasError ? '#ef4444' : '#e2e8f0'}`,
    outline: 'none',
    fontSize: '16px',
    boxSizing: 'border-box',
    transition: 'all 0.2s ease'
  });

  const errorTextStyle = {
    color: '#ef4444',
    fontSize: '10px',
    fontStyle: 'italic',
    marginTop: '4px'
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address";
    if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Phone must be 10 digits";
    if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters";
    
    const selectedDate = new Date(formData.dob);
    if (!formData.dob || selectedDate > new Date()) newErrors.dob = "Please enter a valid date of birth";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 2000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  return (

    
<>
 <Navbar/>
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', fontFamily: 'sans-serif' }}>
     
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{ width: '100%', maxWidth: '400px', backgroundColor: '#ffffff', borderRadius: '24px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', border: '1px solid #f1f5f9', overflow: 'hidden' }}
      >
        {/* Brand Header */}
        <div style={{ backgroundColor: '#2563eb', padding: '32px', textAlign: 'center' }}>
          <h1 style={{ color: '#ffffff', fontSize: '30px', fontWeight: 'bold', margin: 0, letterSpacing: '-0.025em' }}>Dr. Link</h1>
          <p style={{ color: '#dbeafe', fontSize: '14px', marginTop: '8px', fontWeight: '500' }}>Your Health, One Click Away</p>
        </div>

        <div style={{ padding: '32px' }}>
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form 
                key="form"
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleSubmit} 
                style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
              >
                {/* Full Name */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={labelStyle}>Full Name</label>
                  <input 
                    name="fullName"
                    type="text"
                    onChange={handleChange}
                    style={inputStyle(errors.fullName)}
                    placeholder="John Doe"
                  />
                  {errors.fullName && <span style={errorTextStyle}>{errors.fullName}</span>}
                </div>

                {/* Email & Phone Grid */}
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <div style={{ flex: '1', minWidth: '150px' }}>
                    <label style={labelStyle}>Email</label>
                    <input name="email" type="email" onChange={handleChange} style={inputStyle(errors.email)} />
                    {errors.email && <span style={errorTextStyle}>{errors.email}</span>}
                  </div>
                  <div style={{ flex: '1', minWidth: '150px' }}>
                    <label style={labelStyle}>Phone</label>
                    <input name="phone" type="tel" onChange={handleChange} style={inputStyle(errors.phone)} placeholder="98XXXXXXXX" />
                    {errors.phone && <span style={errorTextStyle}>{errors.phone}</span>}
                  </div>
                </div>

                {/* Date of Birth */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={labelStyle}>Date of Birth</label>
                  <input name="dob" type="date" onChange={handleChange} style={inputStyle(errors.dob)} />
                  {errors.dob && <span style={errorTextStyle}>{errors.dob}</span>}
                </div>

                {/* Password */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={labelStyle}>Password</label>
                  <input name="password" type="password" onChange={handleChange} style={inputStyle(errors.password)} placeholder="••••••••" />
                  {errors.password && <span style={errorTextStyle}>{errors.password}</span>}
                </div>

                <button 
                  disabled={isSubmitting}
                  style={{ 
                    width: '100%', 
                    padding: '16px', 
                    backgroundColor: isSubmitting ? '#93c5fd' : '#2563eb', 
                    color: '#ffffff', 
                    borderRadius: '12px', 
                    fontWeight: 'bold', 
                    border: 'none', 
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.2)',
                    fontSize: '16px'
                  }}
                >
                  {isSubmitting ? "Loading..." : "Create Account"}
                </button>
              </motion.form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '40px 0' }}
              >
                <div style={{ width: '80px', height: '80px', backgroundColor: '#dcfce7', color: '#16a34a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto', fontSize: '30px' }}>✓</div>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e293b', margin: 0 }}>Registration Complete!</h2>
                <p style={{ color: '#64748b', marginTop: '8px' }}>Welcome to Dr. Link. You can now book your first appointment.</p>
                <button style={{ marginTop: '32px', color: '#2563eb', fontWeight: 'bold', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Go to Dashboard →</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
    </>
  );
};

export default SignUp;