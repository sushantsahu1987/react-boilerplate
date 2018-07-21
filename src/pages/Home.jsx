import React from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Searchbar from '../components/Searchbar';
import Column from '../components/Column';

const Home = () => {

  const contStyle = {
    margin: '20px',
  };

  const colStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <Container style={contStyle}>
      <Row>
        <Column style={colStyle} >
          <Searchbar />
        </Column>
      </Row>

      <Row>
        
      </Row>
    </Container>);
};

export default Home;
