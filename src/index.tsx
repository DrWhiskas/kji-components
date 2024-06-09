import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BasicModal from './components/Modal/BasicModal';
import BasicButton from './components/Button/BasicButton';
import Card from './pages/Card';
import reportWebVitals from './reportWebVitals';
import { Car } from 'lucide-react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<HashRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/modal" element={<BasicModal />} />
				<Route path="/button" element={<BasicButton />} />
				<Route path="/card" element={<Card />} />
			</Routes>
		</HashRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
