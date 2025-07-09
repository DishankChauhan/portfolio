"use client"
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface LiveCodeEditorProps {
  initialCode?: string
  language?: string
}

export default function LiveCodeEditor({ 
  initialCode = '// Write your code here', 
  language = 'typescript' 
}: LiveCodeEditorProps) {
  const [code, setCode] = useState(initialCode)
  const [output, setOutput] = useState('')
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    try {
      // For demonstration, we'll just show the code length
      // In a real implementation, you might want to use a sandboxed environment
      setOutput(`Code length: ${code.length} characters`)
    } catch (error) {
      setOutput(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }, [code])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-lg overflow-hidden shadow-xl bg-gray-900 max-w-2xl mx-auto"
    >
      <div className="flex items-center justify-between p-4 bg-gray-800">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="text-gray-400 text-sm">{language}</div>
      </div>

      <div className="relative">
        {isEditing ? (
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onBlur={() => setIsEditing(false)}
            className="w-full p-4 bg-gray-900 text-gray-100 font-mono focus:outline-none"
            rows={10}
            autoFocus
          />
        ) : (
          <div onClick={() => setIsEditing(true)}>
            <SyntaxHighlighter
              language={language}
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                padding: '1rem',
                background: 'transparent',
                cursor: 'text'
              }}
            >
              {code}
            </SyntaxHighlighter>
          </div>
        )}
      </div>

      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 'auto' }}
        className="border-t border-gray-800"
      >
        <div className="p-4 text-gray-400">
          <div className="text-sm font-semibold mb-2">Output:</div>
          <div className="font-mono text-sm">{output}</div>
        </div>
      </motion.div>
    </motion.div>
  )
} 