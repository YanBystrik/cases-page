import React from 'react';
import { ConfigProvider } from 'antd';

import { Cases } from './components/Cases/Cases';
import { Header } from './components/Header/Header';

import 'antd/dist/reset.css';
import s from './App.module.scss';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className={s.App}>
      <Header />

      <Cases />

      <Footer />
    </div>
  );
}

export default App;
