import { useRef, useState, useEffect } from 'react'
import AceEditor from 'react-ace'

import 'ace-builds/src-noconflict/mode-mysql'
import 'ace-builds/src-noconflict/theme-github'
import 'ace-builds/src-noconflict/ext-language_tools'
import './index.scss'

export default () => {
  function onChange(newValue: string) {
    console.log('change', newValue)
  }

  return <AceEditor mode="mysql" theme="github" onChange={onChange} name="UNIQUE_ID_OF_DIV" editorProps={{ $blockScrolling: true }} />
}
