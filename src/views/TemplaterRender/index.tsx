import { useState } from 'react'
// import Editor from '@monaco-editor/react'
import { Typography, Row, Col, Card, Input } from 'antd'
// import MonacoEditor from '../../components/MonacoEditor'
// import AceEditor from '../../components/AceEditor'
const { Title } = Typography
const { TextArea } = Input

function TemplaterRender() {
  const [template, setTemplate] = useState('')
  const onTemplateChange = () => {}

  return (
    <div className="page templater-render">
      <Row justify="center">
        <Title level={2}>模版字符串渲染器</Title>
      </Row>

      <Row gutter={24}>
        <Col span={16}>
          <Card title="模版字符串内容" bordered={false}>
            {/* <MonacoEditor></MonacoEditor> */}
            {/* <AceEditor></AceEditor> */}
            {/* <Editor height="90vh" defaultLanguage="javascript" defaultValue="// some comment" onChange={handleEditorChange} /> */}
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
