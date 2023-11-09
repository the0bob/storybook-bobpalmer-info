import React from 'react';
import { Button } from './Button';
import './header.css';

const defaultImg = 'https://avatars.githubusercontent.com/u/13439002?&v=4';
type User = {
  name: string;
};

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  brandIcon?: string;
  brandName?: string;
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({ brandIcon, brandName = "My Brand", user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <header>
    <div className="storybook-header">
      <div>
        <img src={brandIcon ?? defaultImg} width="32" height="32" />
        <h1>{brandName}</h1>
      </div>
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);

export default Header
