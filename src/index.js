import React from 'react';
import ReactDOM from 'react-dom';
import '../src/css/index.css';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import {Layout} from 'antd';
import Head from './js/components/Head'
import Foot from './js/components/Foot';
import Content from './js/components/content';

// const {
//    Content,  Sider,
// } = Layout;

ReactDOM.render(
  <Layout >
      <Head/>
      <Content/>
      <Foot/>
  </Layout>,
  document.getElementById('root')
);

serviceWorker.unregister();
