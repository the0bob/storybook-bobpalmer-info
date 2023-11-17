import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Select, Option } from '../../src/components/Select';
import '../styles.css';

const apiUri = 'https://www.dnd5eapi.co/api/';
const endpoints = [
  {name: '<Select a Category>', index: ''},
  {name: 'Ability Scores', index: 'ability-scores'},
  {name: 'Backgrounds', index: 'backgrounds'},
  {name: 'Classes', index: 'classes'},
  {name: 'Conditions', index: 'conditions'},
  {name: 'Damage Types', index: 'damage-types'},
  {name: 'Equipment', index: 'equipment'},
  {name: 'Equipment Categories', index: 'equipment-categories'},
  {name: 'Feats', index: 'feats'},
  {name: 'Features', index: 'features'},
  {name: 'Languages', index: 'languages'},
  {name: 'Magic Items', index: 'magic-items'},
  {name: 'Magic Schools', index: 'magic-schools'},
  {name: 'Monsters', index: 'monsters'},
  {name: 'Proficiencies', index: 'proficiencies'},
  {name: 'Races', index: 'races'},
  {name: 'Rule Sections', index: 'rule-sections'},
  {name: 'Rules', index: 'rules'},
  {name: 'Skills', index: 'skills'},
  {name: 'Spells', index: 'spells'},
  {name: 'Subclasses', index: 'subclasses'},
  {name: 'Subraces', index: 'subraces'},
  {name: 'Traits', index: 'traits'},
  {name: 'Weapon Properties', index: 'weapon-properties'},
];

const lookup = async (endpoint?: string | null, index?: string | null) => {
  const requestUri = `${apiUri}${endpoint ?? ''}${index && endpoint ? `/`: ''}${index ?? ''}`;
  const response = await fetch(requestUri);
  const data = await response.json();
  return data;
}

const Dnd5eLookup: React.FC = () => {
  const [endpoint, setEndpoint] = useState('');
  const [index, setIndex] = useState('');
  const [data, setData] = useState({} as any);
  const [indexList, setIndexList] = useState({} as any);

  const changeEndpoint = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newEndpoint = event.target.value;
    setIndex('');
    setEndpoint(newEndpoint);
    search(newEndpoint, '');
  }

  const changeIndex = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newIndex = event.target.value;
    setIndex(newIndex);
    search(endpoint, newIndex);
  }

  const search = async (endpoint, index) => { 
    lookup(endpoint, index).then(newData => {
      setData(newData?.results ?? newData);
      console.log(newData);
      if (newData?.results) {
        setIndexList(newData?.results.map((item: any) => ({value: item.index, name: item.name})));
      }
    });
  }

  return (
    <article> 
      <section className="storybook-page">
        <h2>5e SRD Lookup</h2>
        <form className="container">
          <div className="form-element">
            <Select id="endpoint" placeholder='Endpoint' value={endpoint} onChange={changeEndpoint}>
              {endpoints.map((item: any) => <Option key={item.index} value={item.index}>{item.name}</Option>)}
            </Select>
          </div>
          {endpoint && <div className="form-element">
            <Select id="item" placeholder='Item' value={index} onChange={changeIndex}>
              <Option>{'<Select an Entry>'}</Option>
              {indexList?.map?.((item: any) => <Option key={item.value} value={item.value}>{item.name}</Option>)}
            </Select>
          </div>}
        </form>
        {data && <pre style={{ padding: 8, backgroundColor: 'black', color: 'lightgreen', whiteSpace: 'pre-wrap' }}>
          {JSON.stringify(data, null, 2)}
        </pre>}
      </section>
    </article>
  );
};


const meta = {
  title: 'Pages/Dnd5eLookup',
  component: Dnd5eLookup,
  // parameters: {
  //   layout: 'fullscreen',
  // },
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof Dnd5eLookup>;

export { Dnd5eLookup };
export default meta;
