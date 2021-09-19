import React, { useContext } from 'react'
import { DbContext } from '../../context/DbContext'
import TabContainer from '../TabContainer/TabContainer'
import './HomePage.css'

function HomePage() {
  const { db } = useContext(DbContext);
  return (
    <div className="homepage-container">
      <h1> {db.currentApp ? `MCC : ${db.currentApp.toUpperCase()}`: 'MCC' } </h1>
      <TabContainer/>
    </div>
  )
}

export default HomePage
