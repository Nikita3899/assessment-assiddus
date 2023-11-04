import React from 'react'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import style from './layout.module.scss'


const TopBarNav = () => {

  const { Header, Content, Footer, Sider } = Layout;
  const labels = ['Dashboards', 'Account', 'Payroll', 'Reports', 'Advisor', 'Contacts']

  // const {
  //   token: {  },
  // } = theme.useToken();

  return (

     <Layout>
      <div className={style['sider-container']}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className={style['menu-container']} />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined, UploadOutlined].map(
            (icon, index) => ({
              key: String(index + 1),
              icon: React.createElement(icon),
              label: labels[index],
            }),
          )}
        />
      </Sider>
      </div>
      <Layout>
        <Header style={{ padding: 0, backgroundColor: '#fff' }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, minHeight: '80vh', background: '#fff', borderRadius:'12px' }}>content</div>
        </Content>
        {/* <Footer style={{ textAlign: 'center' }}></Footer> */}
      </Layout>
    </Layout>

  )
}

export default TopBarNav