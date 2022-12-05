import React from 'react';
import { Row, Col, CardTitle, Button, CardSubtitle } from 'reactstrap';
import ComponentCard from '../components/ComponentCard';


const About = () => {
  const SandwichPair = [
    {
      title: 'ETH - USDC',
      desc: 'Create React App is a tool that gives you a massive head start when building React apps.',
      icon: 'bi-vinyl',
    },
    {
      title: 'ETH - USDT',
      desc: 'Hooks are functions that let you “hook into” React state and lifecycle features from function components.',
      icon: 'bi-umbrella',
    },
    {
      title: 'ETH - USD',
      desc: 'It is isomorphic authorization JavaScript library which restricts what resources a given client is allowed to access.',
      icon: 'bi-lock',
    },
    {
      title: 'ETH - WBTC',
      desc: 'This theme comes with built-in light & dark layouts, select as per your preference.',
      icon: 'bi-brightness-high',
    },
    {
      title: 'ETH - UNI',
      desc: 'Built-in customizer enables users to change their admin panel look & feel based on their preferences.',
      icon: 'bi-gear',
    },
    {
      title: 'ETH - DAI',
      desc: 'Creative & smart well crafted apps like email, chat, todo & calender allows you to create your apps faster.',
      icon: 'bi-star',
    },
    {
      title: 'ETH - RAI',
      desc: 'Beautifully crafted, clean & modern designed admin theme with 5 different demos & light - dark versions.',
      icon: 'bi-brush',
    },
    {
      title: 'ETH - CAW',
      desc: 'Carefully crafted, clean, smart & easy theme navigation with collapsible option.',
      icon: 'bi-segmented-nav',
    },
    {
      title: 'ETH - FOX',
      desc: 'jQuery is great JS library, But Its not a great idea to use jQuery and React in the same UI.',
      icon: 'bi-shield-check',
    },
  ];
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <ComponentCard
          title="Choose Uniswap Pair to Attack !!"
          subtitle={
            <p>
              First connect your metamask wallet! Then deposit some crypto in our contract, you can choose pair to Attack.
            </p>
          }
        >
          
          <Row>
            <Col lg="8">
              <div className="mt-3">
                <Button
                  color="primary"
                  href="https://www.wrappixel.com/templates/xtreme-react-redux-admin/?ref=33"
                  target="_blank"
                >
                  Know more
                </Button>
              </div>
            </Col>
          </Row>
        </ComponentCard>
        <ComponentCard title="SandwichPair">
          <Row>
            {SandwichPair.map((feature) => (
              <Col lg="4" className="mb-5 pb-3" key={feature.title}>
                <div>
                  <i className={`bi ${feature.icon} text-primary fs-2`} />

                  <CardTitle tag="h4" className="my-3">
                    {feature.title}
                  </CardTitle>
                  <CardSubtitle className="text-muted col-10">{feature.desc}</CardSubtitle>
                </div>
              </Col>
            ))}
          </Row>
        </ComponentCard>
      </Col>
    </Row>
  );
};

export default About;
