import React from 'react';
import { Button } from './Button';
import './header.css';

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

export const Header = ({ brandIcon, brandName, user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <header>
    <div className="storybook-header">
      <div>
        {brandIcon 
          ? <img src={brandIcon} width="32" height="32" /> 
          : <img src={'/stories/assets/hob-icon.png'} width="32" height="32" 
        />}
        <h1>{brandName ?? 'HobUI'}</h1>
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
