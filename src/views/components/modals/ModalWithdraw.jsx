import React, { useContext, useState, useEffect } from 'react'
import { Form, InputNumber, Modal, Spin } from 'antd'
import { CheckOutlined } from '@ant-design/icons'

import { AppContext } from '../../../context/AppProvider'
import { useWithdrawMutation } from '../../../app/services/authApi'

import './style.scss'

export default function ModalWithdraw() {
  const { isWithdrawVisible, setIsWithdrawVisible } = useContext(AppContext)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [contentSuccess, setContentSuccess] = useState('')

  const [form] = Form.useForm()
  useEffect(() => {
    form.setFieldsValue({
      amount: 100,
    })
  }, [])

  const handleOk = () => {
    setIsWithdrawVisible(false)
  }
  const handleCancel = () => {
    setIsWithdrawVisible(false)
    setIsSuccess(false)
  }

  const [withdraw] = useWithdrawMutation()
  const handleWithdraw = async (values) => {
    try {
      setIsLoading(true)
      const payload = {
        amount: values?.amount,
      }
      const resultWithdraw = await withdraw({ payload })
      if (resultWithdraw.status === 200) {
        setIsLoading(false)
        setContentSuccess('Withdraw success')
      } else {
        setIsLoading(false)
      }
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  return (
    <Modal
      title="Withdraw"
      visible={isWithdrawVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      maskClosable={false}
      footer={null}
      className="modal-default"
    >
      <Spin spinning={isLoading}>
        {isSuccess ? (
          <div className="content-success">
            <div className="icon">
              <CheckOutlined />
            </div>
            <h3 className="content">{contentSuccess}</h3>
            <div className="submit-form">
              <button className="withdraw" onClick={handleCancel}>
                Done
              </button>
            </div>
          </div>
        ) : (
          <Form form={form} layout="vertical" onFinish={handleWithdraw}>
            <Form.Item label="Your token amount" name="amount">
              <InputNumber min={100} allowClear className="input-price" />
            </Form.Item>
            <div className="submit-form">
              <button className="withdraw" htmlType="submit">
                Withdraw
              </button>
            </div>
          </Form>
        )}
      </Spin>
    </Modal>
  )
}
