/*
 * @Description: add.tsx
 * @Date: 2021-07-07 12:16:32
 * @Author: LeiLiu
 */
import React, { useEffect } from 'react';
import { Form, Input, DatePicker, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import dayjs from 'dayjs';
import { WORDS } from '../../types';
import './add.scss';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 12 },
};

export default function Add() {
  const [form] = Form.useForm();
  const history = useHistory();

  useEffect(() => {
    form.setFieldsValue({
      text: 'Hello world!',
      time: null,
    });

    return () => {};
  }, []);

  const disabledDate = (current: any) => {
    // Can not select days before today second
    return current && current < dayjs().startOf('second');
  };

  const onFinish = (values: any) => {
    const { text, time } = values;
    console.log(text, time.format('YYYY-MM-DD HH:mm:ss'));
  };

  const onSave = async() => {
    try {
      const { text, time } = await form.validateFields();
      const list = JSON.parse(localStorage.getItem(WORDS.TODOS_LIST) || '[]');
      list.push({ text, time: time.format('YYYY-MM-DD HH:mm:ss') });
      localStorage.setItem(WORDS.TODOS_LIST, JSON.stringify(list));
      history.push('/todos');
      // 传递任务到主进程
      window.api.electronIpcSend('setTaskTimer', time.valueOf(), encodeURIComponent(text));
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };

  const onReset = () => {
    // form.resetFields();
    form.setFieldsValue({
      text: '',
      time: dayjs(),
    });
  };

  return (
    <div className="todo-add">
      <div className="todo-add__title">新建任务</div>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item name="text" label="设置任务" rules={[{ required: true }]}>
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item name="time" label="设置时间" rules={[{ required: true }]}>
          <DatePicker disabledDate={disabledDate} showTime format="YYYY-MM-DD HH:mm:ss" />
        </Form.Item>
        <Form.Item {...tailLayout}>
          {/* <Button type="primary" htmlType="submit">
            保存
          </Button> */}
          <Button type="primary" onClick={onSave}>
            保存
          </Button>
          <Button htmlType="button" onClick={onReset} style={{marginLeft: '10px'}}>
            重置
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}