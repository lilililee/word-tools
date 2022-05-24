import { useState } from 'react'
import { Typography, Row, Col, Card, Input } from 'antd'

const { Title } = Typography
const { TextArea } = Input

function TemplaterRender() {
  const [template, setTemplate] = useState('')

  return (
    <div className="page templater-render">
      <Row justify="center">
        <Title level={2}>模版字符串渲染器</Title>
      </Row>

      <Row gutter={24}>
        <Col span={16}>
          <Card title="模版字符串内容" bordered={false}>
            <TextArea placeholder="请输入" autoSize={{ minRows: 15, maxRows: 40 }} />
          </Card>
        </Col>
        <Col span={6}>
          <Card title="数据设置" bordered={false}>
            222
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default TemplaterRender
