import React, { useEffect } from 'react'
import TagCloud from 'TagCloud'
import './index.scss' // Importe seus estilos SCSS atualizados

const TextSphere = () => {
  useEffect(() => {
    const container = '.tagcloud'
    const texts = [
      'HTML',
      'SCSS',
      'JavaScript',
      'React',
      'TypeScript',
      'Python',
      'PySpark',
      'Machine Learning',
      'Artificial Neural Networks',
      'Node.js',
      'GIT',
      'SQL',
      'VBA',
      'Microsoft Office',
      'Power BI',
      'Tableau',
      'Team Work',
      'Data Analysis',
      'Data Engineering',
      'Data Science',
      'English',
      'Portuguese',
    ]

    const adjustRadius = () => {
      const screenWidth = window.innerWidth
      const radius = screenWidth < 750 ? 150 : 200

      return radius
    }

    const options = {
      radius: adjustRadius(), // Ajuste o raio conforme necessário
      maxSpeed: 'normal',
      initSpeed: 'normal',
      keep: true,
    }

    TagCloud(container, texts, options)
  }, [])

  return (
    <div className="text-sphere">
      <div className="tagcloud"></div>
    </div>
  )
}

export default TextSphere
