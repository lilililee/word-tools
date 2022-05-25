import { useRef, useState, useEffect } from 'react'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import './index.scss'

export default () => {
  const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor | null>(null)
  const monacoEl = useRef(null)

  useEffect(() => {
    if (monacoEl && !editor) {
      setEditor(
        monaco.editor.create(monacoEl.current!, {
          language: 'sql',
          value: 'x',
          folding: true,
          theme: 'vs',
          scrollbar: {
            verticalScrollbarSize: 8,
            horizontalScrollbarSize: 8
          },
          // minimap: {
          //   enabled: withMiniMap
          // },
          formatOnPaste: true,
          renderValidationDecorations: 'on'
        })
      )
    }

    return () => editor?.dispose()
  }, [monacoEl.current])

  return <div className="monaco-editor" ref={monacoEl}></div>
}
