import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import styled from 'styled-components';
import logo from './images/brand-logo.png';

const Styles = styled.div`
	.navbar {
		background-color: #000;
		height: 85px;
	}
	.item {
		margin-right: 20px;
	}

	a,
	.navbar-brand,
	.navbar-nav .nav-link {
		color: #efefef;
		&:hover {
			color: black;
		}
	}

	img {
		margin-left: 20px;
	}
`;

export const NavigationBar = () => (
	<Styles>
		<Navbar expand='lg'>
			<Navbar.Brand href='/'>
				<img src={logo} alt='logo' />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='ml-auto'>
					<Nav.Item className='item'>
						<Button variant='outline-light' href='/'>
							Home
						</Button>
					</Nav.Item>
					<Nav.Item className='item'>
						<Button variant='outline-light' href='/list'>
							Countries
						</Button>
					</Nav.Item>
					<Nav.Item className='item'>
						<Button variant='outline-light' href='/info'>
							Info
						</Button>
					</Nav.Item>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	</Styles>
);
