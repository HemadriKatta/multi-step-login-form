import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useMyObject } from './context';
import designImg from "./design.jpg";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Illustration = styled.div`
  flex: 1;
  background-image: url(${designImg});
  background-size: cover;
  background-position: center;
`;

const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const FormField = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Agreement = styled.div`
  margin-bottom: 1rem;
`;

const SubmitButton = styled.button`
  background-color: #ea4c89;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SignInContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const SignInLink = styled.a`
  text-decoration: none;
  color :#ff6b6b;
  cursor: pointer;
`;

const SignInText = styled.p`
  color: black;
  font-size: 16px;
`;

const Heading = styled.h3`
  align-items: center;
  color: #ff6b6b;
  font-size : 30px;
`;

const SignUpPage = () => {
  const navigate = useNavigate();
  const { setName, setUsername, setEmail, setPassword, setAgreement } = useMyObject();
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    agreement: false
  });
  const [signInClicked, setSignInClicked] = useState(false); // State to track if "Sign in" link is clicked

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, username, email, password, agreement } = formData;
    if (!name) {
      alert('Please fill in the Name field');
      return;
    }
    if (!username) {
      alert('Please fill in the Username field');
      return;
    }
    if (!email) {
      alert('Please fill in the Email field');
      return;
    }
    if (!password) {
      alert('Please fill in the Password field');
      return;
    }
    if (!agreement) {
      alert('Please agree to the terms');
      return;
    }

    navigate('/secondPage');
    console.log('Form submitted:', { name, username, email, password, agreement });
    // Proceed with form submission
  };

  const handleSignInClick = () => {
    // Update form data
    setName('Existing User');
    setUsername('existinguser');
    setEmail('existinguser@example.com');
    setPassword('password');
    setAgreement(true);
    setSignInClicked(true); // Set state to true when "Sign in" is clicked
  };

  return (
    <Container>
      <Illustration />
      <SignInContainer>
        <SignInText>
          Already a member? <SignInLink onClick={handleSignInClick}>Sign in</SignInLink>
        </SignInText>
      </SignInContainer>

      <Form onSubmit={handleSubmit}>
        <Heading>Dribbble</Heading>
        {signInClicked ? ( // Conditionally render form based on signInClicked state
          <div>
            {/* New Form for Sign in */}
            <FormField>
              <Label htmlFor="existingEmail">Email</Label>
              <Input
                type="email"
                id="existingEmail"
                name="existingEmail"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormField>
            <FormField>
              <Label htmlFor="existingPassword">Password</Label>
              <Input
                type="password"
                id="existingPassword"
                name="existingPassword"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </FormField>
            <SubmitButton type="submit">Sign in</SubmitButton>
          </div>
        ) : (
          <div>
            {/* Original Sign-up Form */}
            <FormField>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormField>
            <FormField>
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </FormField>
            <FormField>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormField>
            <FormField>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </FormField>
            <Agreement>
              <input
                type="checkbox"
                id="agreement"
                name="agreement"
                checked={formData.agreement}
                onChange={handleChange}
                required
              />
              <label htmlFor="agreement">
                Creating an account means you're okay with our Terms of Service, Privacy Policy, and our default
                Notification Settings.
              </label>
            </Agreement>
            <SubmitButton type="submit">Create Account</SubmitButton>
          </div>
        )}
        
      </Form>
    </Container>
  );
};

export default SignUpPage;

