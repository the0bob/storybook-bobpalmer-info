import React from 'react';

import { Header } from './Header';
import { Input } from './Input';
import { Textarea } from './Textarea';
import { Button } from './Button';
import './pageContact.css';

type User = {
  name: string;
};

export const PageContact: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <section className="storybook-page">
        <h2>Contact Form</h2>
        <form className="container">
          <div className="form-element">
            <Input id="name" type="text" placeholder='Name' />
          </div>
          <div className="form-element">
            <Input id="email" type="text" placeholder='Email' />
          </div>
          <div className="form-element">
            <Textarea id="message" placeholder='Message' />
          </div>
          <div className="form-element">
            <Button>Send</Button>
          </div>
        </form>
      </section>
    </article>
  );
};
