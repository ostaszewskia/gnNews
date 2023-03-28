import { ThemeProvider } from '@mui/material';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Canvas from './components/Canvas.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Menu from './components/Menu.jsx';
import HomePage from './pages/HomePage.jsx';
import { DashboardContainer, MiddleContainer } from './theme/styled.js';
import { theme } from './theme/theme.js';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Header data-testid='header-component'/>
			<DashboardContainer>
				<Menu data-testid='menu-component'/>
				<MiddleContainer data-testid='middle-container'>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/country/:countryName" element={<Canvas />} />\
					</Routes>
				</MiddleContainer>
			</DashboardContainer>
			<Footer data-testid='footer-component'/>
		</ThemeProvider>
	);
}

export default App;
