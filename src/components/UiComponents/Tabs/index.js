import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import TabsWrapper from './style';

const Index = (props) => {
  const {defaultActiveKey, tabsData} = props;

  return (
    <TabsWrapper>
      <Tabs
        defaultActiveKey={defaultActiveKey}
        id="fill-tab-example"
        className="mb-4"
        fill
      >
        {tabsData.map((item, ind)=> (
          <Tab eventKey={item.eventKey} title={item.title} key={ind}>
            {item.children}
          </Tab>
        ))}
      </Tabs>
    </TabsWrapper>
  )
}

export default Index;
