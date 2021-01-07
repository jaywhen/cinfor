import React, { Component } from "react";
import 'antd/dist/antd.css';
import { Table, Tag, Space } from 'antd';


class Ctable extends Component{
    render(){
        // table columns
        const columns = [
            {
              title: 'College',
              dataIndex: 'college',
              key: 'college',
              render: text => <a>{text}</a>,
            },
            {
              title: 'Code',
              dataIndex: 'code',
              key: 'code',
            },
            {
              title: 'Address',
              dataIndex: 'address',
              key: 'address',
            },
            {
              title: 'Tags',
              key: 'tags',
              dataIndex: 'tags',
              render: tags => (
                <>
                  {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                      color = 'volcano';
                    }
                    return (
                      <Tag color={color} key={tag}>
                        {tag.toUpperCase()}
                      </Tag>
                    );
                  })}
                </>
              ),
            },
            // {
            //   title: 'Action',
            //   key: 'action',
            //   render: (text, record) => (
            //     <Space size="middle">
            //       <a>Invite {record.name}</a>
            //       <a>Delete</a>
            //     </Space>
            //   ),
            // },
          ];
        const data = this.props.data
        return(
            <Table columns={columns} dataSource={data} />
        )
    }
}

export default Ctable;