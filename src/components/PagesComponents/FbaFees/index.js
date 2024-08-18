import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

import Tabs from '../../UiComponents/Tabs';
import FbaFeeDetails from '../FbaFeesDetails';
import Accordion from "../../UiComponents/Collapse";
import RefundImg from '../../../assets/svgs/refund-img.svg';
import InventoryImg from '../../../assets/svgs/inventory-img.svg';
import PaymentsImg from '../../../assets/svgs/payments-img.svg';
import ShipmentsImg from '../../../assets/svgs/shipments-img.svg';
import OverchargesImg from '../../../assets/svgs/overcharges-img.svg';
import {
  refundDetails,
  inventoryDetails,
  paymentsDetails,
  shipmentsDetails,
  overchargesDetails,
  fbaFeesData
} from '../../../constants';

import FbaFeesWrapper from './style';

const Index = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const tabsData = [
    {
      title: 'Refunds',
      eventKey: 'refund',
      children: <FbaFeeDetails heading='Refunds' img={<RefundImg />} feeDetails={refundDetails} />
    },
    {
      title: 'Inventory',
      eventKey: 'inventory',
      children: <FbaFeeDetails heading='Inventory' img={<InventoryImg />} feeDetails={inventoryDetails} />
    },
    {
      title: 'Payments',
      eventKey: 'payments',
      children: <FbaFeeDetails heading='Payments' img={<PaymentsImg />} feeDetails={paymentsDetails} />
    },
    {
      title: 'Shipments',
      eventKey: 'shipments',
      children: <FbaFeeDetails heading='Shipments' img={<ShipmentsImg />} feeDetails={shipmentsDetails} />
    },
    {
      title: 'Fees and Overcharges',
      eventKey: 'fees',
      children: <FbaFeeDetails heading='Fees and Overcharges' img={<OverchargesImg />} feeDetails={overchargesDetails} />
    },
  ];

  return (
    <FbaFeesWrapper>
      <Container className='custom-container'>
        {/* <ScrollAnimation animateIn="fadeIn"> */}
          <div className='fba-heading'>
            <h2>FBA Fees Got You Down? <br /> “<span>We Get Your Money Back</span>”</h2>
          </div>
        {/* </ScrollAnimation> */}
        {/* <ScrollAnimation animateIn="fadeIn" delay={300}> */}
          <div className='fba-tabs'>
            <Tabs tabsData={tabsData} defaultActiveKey='refund' />
          </div>
        {/* </ScrollAnimation> */}
      </Container>
      <div className='mobile-collapse'>
        {fbaFeesData.map((item, ind) => (
          <Accordion
            title={item.heading}
            open={openIndex === ind}
            onClick={() => handleToggle(ind)}
            key={ind}
            className='small-collapse'
          >
            <img src={item.img} alt={item.heading} title={item.heading} loading='lazy' />
            <h3 className='mt-4'>{item.heading}</h3>
            {item.data.map((data, ind) => (
              <div key={ind} className='fee-details'>
                <label>{data.label}</label>
                <span>{data.desc}</span>
              </div>
            ))}
          </Accordion>
        ))}
      </div>
    </FbaFeesWrapper>
  )
}

export default Index;
