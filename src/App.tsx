import React from 'react';
import {TsBasics} from './quiz-ts-1'
import { TsUserProfile } from './quiz-ts-1';
import { TsCounter } from './quiz-ts-1';
import { TsButton } from './quiz-ts-1';
import { TsMessage } from './quiz-ts-1';
import { ThemeConsumer, ThemeProvider } from './quiz-ts-1/themeProvider';
import { TsList } from './quiz-ts-1';
import { TsReadonly } from './quiz-ts-1';
import { TsInput } from './quiz-ts-1';
import { TsTuple } from './quiz-ts-1';
import { Button, Toolbar, Typography, Chip } from '@mui/material';
import AppBar from './theme/appBar'

function App() {
  const stringArray = ['Item 1', 'Item 2', 'Item 3'];
  
  const readonlyStrings: ReadonlyArray<string> = ['Apple', 'Banana', 'Cherry'];

  return (

    <ThemeProvider theme="light">
        <AppBar/>

      <div className="App">
        <TsBasics basics={["juana", "Oskar", "Andrea", "Andres"]}/>
        <TsUserProfile 
        name="Andrea Carmona" 
        age={30} 
        hobbies={['Leer', 'Tejer', 'Programar']}
      />
      <TsCounter/>
      <TsButton/>
      <TsMessage message="Hello, Arquitecto" />
      <ThemeConsumer/> 
      </div>
      <TsList items={stringArray} renderItem={(item) => <span>{item}</span>} />
      <TsReadonly items={readonlyStrings} />
      <TsInput value="Hello" />
      <TsInput value={123} />
      <TsInput value={{ name: "Andrea", age: 30 }} />
      <TsTuple/>
    </ThemeProvider>

  );
}

export default App;
