import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Header } from '../../src/components/Header';
import { Input } from '../../src/components/Input';
import { Textarea } from '../../src/components/Textarea';
import { Button } from '../../src/components/Button';
import '../styles.css';

type User = {
  name: string;
};

const Contact: React.FC = () => {
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

const meta = {
  title: 'Pages/Contact',
  component: Contact,
  // parameters: {
  //   layout: 'fullscreen',
  // },
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof Contact>;

export { Contact };
export default meta;
