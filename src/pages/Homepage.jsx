import React from 'react'
import { Layout, Row, Col } from 'antd';
import AllCrypto from '../components/AllCrypto'
import FavoriteCrypto from '../components/FavoriteCrypto'

const Homepage = () => {
  return (
    <Layout style={{ padding: '24px' }}>
      <Row gutter={16}>
        <Col span={12}>
          <AllCrypto />
        </Col>
        <Col span={12}>
          <FavoriteCrypto />
        </Col>
      </Row>
    </Layout>
  )
}

export default Homepage
