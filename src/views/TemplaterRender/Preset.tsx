import { useState, SyntheticEvent, useEffect } from 'react'
import { Collapse, Row, Col, Card, Input, Form, Button, Modal, message, Popconfirm, Descriptions } from 'antd'
import { useLocalStorageState } from 'ahooks'
import { TemplaterData } from '.'

const { Panel } = Collapse

const Preset = ({ formData, onSelectPreset }: { formData: TemplaterData; onSelectPreset: (preset: TemplaterData) => void }) => {
  const [presetMap, setPresetMap] = useLocalStorageState('TemplaterRenderPresetData', {
    defaultValue: {} as Record<string, TemplaterData>
  })
  const [presetModalVisible, setPresetModalVisible] = useState(false)
  const [savePresetModalVisible, setSavePresetModalVisible] = useState(false)
  const [presetName, setPresetName] = useState('')

  const showPresetModal = () => {
    setPresetModalVisible(true)
  }
  const showSavePresetModal = () => {
    setSavePresetModalVisible(true)
    setPresetName('')
  }

  const savePreset = () => {
    const name = presetName.trim()
    if (!name) return message.error('请输入模版名称')
    if (presetMap?.[name]) return message.error('当前模版名称已存在，请更换名称')

    setPresetMap({
      ...presetMap,
      [name]: formData
    })
    message.success('保存模版成功')
    setSavePresetModalVisible(false)
  }

  const genExtra = (presetName: string) => {
    const preset = presetMap?.[presetName] || {}
    const selectPreset = () => {
      onSelectPreset(preset)
      setPresetModalVisible(false)
      message.success('导入模版数据成功')
    }

    const deletePreset = () => {
      const map = {
        ...presetMap
      }
      delete map[presetName]
      setPresetMap(map)
    }

    return (
      <div>
        <Button size="small" type="link" onClick={selectPreset}>
          选择
        </Button>
        <Popconfirm
          title="确认删除该模版吗？"
          onConfirm={deletePreset}
          // onCancel={cancel}
          okText="确认"
          cancelText="取消"
        >
          <Button size="small" type="link" danger>
            删除
          </Button>
        </Popconfirm>
      </div>
    )
  }

  return (
    <div className="templater-render-preset">
      <Button type="primary" size="small" onClick={showPresetModal}>
        导入模版数据
      </Button>
      <Button size="small" style={{ marginLeft: 20 }} onClick={showSavePresetModal}>
        数据存为模版
      </Button>

      <Modal
        title="模版数据列表"
        width={700}
        visible={presetModalVisible}
        onOk={() => setPresetModalVisible(false)}
        onCancel={() => setPresetModalVisible(false)}
        okText="确认"
        cancelText="取消"
        destroyOnClose
      >
        <Collapse defaultActiveKey={[]}>
          {presetMap &&
            Object.keys(presetMap).map((presetName) => (
              <Panel header={presetName} key={presetName} extra={genExtra(presetName)}>
                <Descriptions title="" column={2}>
                  {Object.keys(presetMap[presetName]).map((field: string) => (
                    <Descriptions.Item label={field} key={field}>
                      {presetMap[presetName][field]}
                    </Descriptions.Item>
                  ))}
                </Descriptions>
              </Panel>
            ))}
        </Collapse>
      </Modal>

      <Modal title="将当前数据存为模版" visible={savePresetModalVisible} onOk={savePreset} onCancel={() => setSavePresetModalVisible(false)} okText="确认" cancelText="取消">
        <Input value={presetName} placeholder="请输入模版名称" onChange={(e: any) => setPresetName(e.target.value)}></Input>
      </Modal>
    </div>
  )
}

export default Preset
