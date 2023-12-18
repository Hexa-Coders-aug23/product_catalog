import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const { state } = useLocation();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMessage('');

    login(username, password)
      .then(() => {
        navigate(state?.pathname || '/', { replace: true });
      })
      .catch(error => setErrorMessage(error.message));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="username"
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        placeholder="password"
        type="password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Sign In</button>
      {errorMessage}
    </form>
  );
};
