import React from 'react'
// import * as serviceWorker from '../../serviceWorker';
import 'antd/dist/antd.css';
import {Layout, Menu, Breadcrumb,Icon } from 'antd';
import ExcellentLog from '../components/excellentLog'

// import PropTypes from 'prop-types'
const { Content,  Sider,}=Layout


const content = () => (
    <Layout>
     <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>思特沃科学习平台</Breadcrumb.Item>
        <Breadcrumb.Item>成长日志</Breadcrumb.Item>
        <Breadcrumb.Item>优秀日志</Breadcrumb.Item>
      </Breadcrumb>
      <Layout style={{ padding: '24px 0', background: '#fff' }}>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['3']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
              <Menu.Item key="1">
              <span>我的日志  &nbsp;  </span>
              <Icon type="edit" />
              </Menu.Item>
              <Menu.Item key="2">我的关注 &nbsp;&nbsp;
              <Icon type="file" />
              </Menu.Item>
              <Menu.Item key="3">优秀日志 &nbsp;&nbsp;
              <Icon type="star" />
              </Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          <ExcellentLog/>
        </Content>
      </Layout>
    </Content>
    </Layout>

)
// 定义一个Header组件

// Header.propTypes = {
//   addTodo: PropTypes.func.isRequired
// }

// 之前定义过的 Addtodo Action
// 使用prop-types来记录传递给组件的props,如果它们不匹配将发出警告
export default content