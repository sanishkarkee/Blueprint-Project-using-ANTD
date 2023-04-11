import {
  Button,
  Checkbox,
  Col,
  Collapse,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Table,
} from 'antd';
import React from 'react';
import { FormWrapper } from './FormStyles';

const { Panel } = Collapse;
const { RangePicker } = DatePicker;

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const dataSource = [
  {
    key: '1',
    lowerbound: 100000,
    percentage: 32,
    maritialstatus: 'married',
  },
  {
    key: '2',
    lowerbound: 200000,
    percentage: 42,
    maritialstatus: 'unmarried',
  },
];

const columns = [
  {
    title: 'Lower Bound',
    dataIndex: 'lowerbound',
    key: 'lowerbound',
  },
  {
    title: 'Percentage',
    dataIndex: 'percentage',
    key: 'percentage',
  },
  {
    title: 'Maritial Status',
    dataIndex: 'maritialstatus',
    key: 'maritialstatus',
  },
];

const FormCompo = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <FormWrapper>
      <Form
        name='basic'
        labelCol={{
          span: 10,
        }}
        wrapperCol={{
          span: 14,
        }}
        style={{
          maxWidth: 650,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Collapse
          defaultActiveKey={['1']}
          onChange={onChange}
          expandIconPosition='end'
        >
          <Panel
            header='This is panel header 1'
            key='1'
            collapsible='disabled'
            showArrow={false}
          >
            <Row>
              <Col span={12}>
                <Form.Item
                  label='Text'
                  name='text'
                  rules={[
                    {
                      required: true,
                      message: 'Please input Text!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label='Code'
                  name='code'
                  rules={[
                    {
                      required: true,
                      message: 'Please input the code!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                {' '}
                <Form.Item
                  label='Fiscal Start Year'
                  name='fiscalstartdate'
                  rules={[
                    {
                      required: true,
                      message: 'Please input start date!',
                    },
                  ]}
                >
                  <DatePicker />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label='Fiscal End year'
                  name='fiscalenddate'
                  rules={[
                    {
                      required: true,
                      message: 'Please input end date!',
                    },
                  ]}
                >
                  <DatePicker />
                </Form.Item>
              </Col>
            </Row>
          </Panel>
          <Panel header='This is panel header 2' key='2'>
            <Row justify={'center'}>
              <Col span={16}>
                <Form.Item label='Max SSF Limit' name='ssflimit'>
                  <Input />
                </Form.Item>
              </Col>

              <Col span={16}>
                <Form.Item label='Max CIT Limit' name='citlimit'>
                  <Input />
                </Form.Item>
              </Col>

              <Col span={16}>
                <Form.Item
                  label='Max Retirement Fund'
                  name='retirementfund'
                >
                  <Input />
                </Form.Item>
              </Col>

              <Col span={16}>
                <Form.Item label='Max PF Limit' name='pflimit'>
                  <Input />
                </Form.Item>
              </Col>

              <Col span={16}>
                <Form.Item
                  label='Life Insurance'
                  name='lifeinsurance'
                >
                  <Input />
                </Form.Item>
              </Col>

              <Col span={16}>
                <Form.Item
                  label='Medical Insurance'
                  name='medicalinsurance'
                >
                  <Input />
                </Form.Item>
              </Col>

              <Col span={16}>
                <Form.Item
                  label='House Insurance'
                  name='houseinsurance'
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </Panel>
          <Panel header='This is panel header 3' key='3'>
            <Row justify={'center'}>
              <Col span={16}>
                <Form.Item label='Lower Bound' name='lower bound'>
                  <Input />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label='Percentage' name='percentage'>
                  <Input />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label='Maritial Status'>
                  <Select>
                    <Select.Option value='married'>
                      Married
                    </Select.Option>
                    <Select.Option value='unmarried'>
                      Unmarried
                    </Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Table dataSource={dataSource} columns={columns} />;
          </Panel>
        </Collapse>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
          className='customSubmit-Btn'
        >
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </FormWrapper>
  );
};

export default FormCompo;
