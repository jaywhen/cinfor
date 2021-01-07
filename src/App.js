import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import { cs_data, se_data } from "./data";
import Ctable from "./Ctable";

class App extends Component {
  
  state = {
    table_data: cs_data,
  };

  handleClick = e => {
    // alert("you clicked " + e.key)
    if(e.key === 'cs'){
      this.setState({table_data: cs_data})
      this.setState({current: e.key})
    } else {
      this.setState({table_data: se_data})
      this.setState({current: e.key})
    }
  }

  render(){
    const data = this.state.table_data

    return(
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '60%', alignSelf: 'center' }}>
          <Menu theme='dark' mode='horizontal' onClick={this.handleClick} defaultSelectedKeys={['cs']}>
            <Menu.Item key='cs'>cs</Menu.Item>
            <Menu.Item key='se'>se</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ marginTop: 64, width: '60%', alignSelf: 'center' }}>
          <Ctable data={data} />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Create by 
          <a href={'https://github.com/jaywhen'}> Jaywhen</a>
        </Footer>
      </Layout>      
    )
  }
}

export default App;
