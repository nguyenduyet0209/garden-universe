import React, { useContext, useState } from 'react'
import { Form, InputNumber, Modal, Spin } from 'antd'

import { AppContext } from '../../../context/AppProvider'

import './style.scss'
import { CheckOutlined } from '@ant-design/icons'
import detectProvider from '../../../web3-connect/detectProvider'
import { DepositWeb3 } from '../../../web3-connect/deposit'
import { useAppSelector } from '../../../app/hook'
import { useDepositWithHashMutation } from '../../../app/services/authApi'

export default function ModalDeposit() {
  const { ethAddress } = useAppSelector((state) => state.auth)

  const { isDepositVisible, setIsDepositVisible } = useContext(AppContext)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [contentSuccess, setContentSuccess] = useState('')

  const [form] = Form.useForm()

  const handleOk = () => {
    setIsDepositVisible(false)
  }
  const handleCancel = () => {
    setIsSuccess(false)
    setIsDepositVisible(false)
  }

  const [depositWithHash] = useDepositWithHashMutation()

  const handleDeposit = (values) => {
    const provider = detectProvider()
    DepositWeb3({
      provider,
      ethAddress,
      price: String(values?.price),
      BUSDAddress: '',
      idoReceiveAddress: '',
      setIsLoading,
      depositWithHash,
      setIsSuccess,
      setContentSuccess,
    })
  }

  return (
    <Modal
      title="Deposit"
      visible={isDepositVisible}
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
          <Form form={form} layout="vertical" onFinish={handleDeposit}>
            <Form.Item label="Your token amount" name="price">
              <InputNumber
                min={1}
                allowClear
                defaultValue={100}
                className="input-price"
              />
            </Form.Item>
            <div className="submit-form">
              <button className="deposit" htmlType="submit">
                Deposit
              </button>
            </div>
          </Form>
        )}
      </Spin>
    </Modal>
  )
}
