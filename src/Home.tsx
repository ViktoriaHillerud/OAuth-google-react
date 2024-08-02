import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
	<div>
		<h1>Welcome to OAuth showcase!</h1>
		<Link to="/account">Log in</Link>
	</div>
  )
}

export default Home