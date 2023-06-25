import React from 'react'
import { createRoot } from 'react-dom/client'

import HelloMessage from 'src/pages/App'

import 'src/lib/serviceWorkerCompanion'

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('root')
  const root = createRoot(container)
  root.render(<HelloMessage name="World" />)
})
