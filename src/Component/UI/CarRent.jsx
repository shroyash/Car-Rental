import React from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import './carRent.css';

const CarRent = () => {
  return (
    <div>
      <section className='car-rent relative'>
        <Container className=' car-container absolute bg-white h-90 top-[-50px] inset-x-0 p-4'>
          <Row className='align-items-center'>
            <Col lg='3' md='3' sm='3' className='car-rent__img flex items-center'>
              <h3 className='font-extrabold'>Search your best <br/>Cars here</h3>
            </Col>
            <Col lg='9' md='9' sm='9'>
              <Form>
                <Row>
                  <Col lg='4' md='4' sm='12'>
                    <FormGroup>
                      <Input type="text" placeholder='From Address' className='form-control' />
                    </FormGroup>
                    <FormGroup>
                      <Input type="time" className='form-control' />
                    </FormGroup>
                  </Col>
                  <Col lg='4' md='4' sm='12'>
                    <FormGroup>
                      <Input type="text" placeholder='To Address' className='form-control' />
                    </FormGroup>
                    <FormGroup>
                      <Input type="select" className='form-control'>
                        <option>Ac Car</option>
                        <option>Modern Car</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col lg='4' md='4' sm='12'>
                    <FormGroup>
                      <Input type="date" className='form-control' />
                    </FormGroup>
                    <FormGroup>
                      <Button className='btn bg-primary w-100'>Find a Car</Button>
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default CarRent;

