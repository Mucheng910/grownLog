import React from 'react'
// import * as serviceWorker from '../../serviceWorker';
import 'antd/dist/antd.css';
import {Layout } from 'antd';

// import PropTypes from 'prop-types'
const {Footer}=Layout


const Foot = () => (
    <Layout >
    <Footer style={{ textAlign: 'center' }}>
    ThoughtWorks Learning Platform ©2019
    </Footer>
    </Layout>

)
// 定义一个Header组件

// Header.propTypes = {
//   addTodo: PropTypes.func.isRequired
// }

// 之前定义过的 Addtodo Action
// 使用prop-types来记录传递给组件的props,如果它们不匹配将发出警告
export default Foot