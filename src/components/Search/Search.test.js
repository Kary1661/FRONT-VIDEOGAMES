import React from 'react';
import { render, fireEvent } from '@testing-library/react'; //La función render se utiliza para renderizar un componente de React en un entorno aislado para las pruebas. La función fireEvent se utiliza para simular eventos en el componente renderizado (por ejemplo, hacer clic en un botón). 
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom'; // Para simular el useNavigate

import Search from './Search';

test('Verificar que el componente Search se renderize correctamente', () => {
  const { getByPlaceholderText, getByText } = render(
    <MemoryRouter>
      <Search />
    </MemoryRouter>
  );

  const searchInput = getByPlaceholderText('Search your favorite game');
  const searchButton = getByText('Search');
  // Verificar que el input y el botón se rendericen correctamente
  expect(searchInput).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();
});

// Simular todo el proceso de búsqueda
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(), // Simular el hook useNavigate como una función jest
  }));
  
  test('Navegación correcta a la página de resultados de búsqueda', () => {
    const mockNavigate = jest.fn();
    // Obtener el hook useNavigate y simular su valor de retorno
    const useNavigateMock = require('react-router-dom').useNavigate;
    useNavigateMock.mockReturnValue(mockNavigate); // Simular el valor de retorno de useNavigate
  
    const { getByPlaceholderText, getByText } = render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    );
  
    const searchInput = getByPlaceholderText('Search your favorite game');
    const searchButton = getByText('Search');
  
    // Ingresar una consulta de búsqueda en el input
    fireEvent.change(searchInput, { target: { value: 'Super Mario' } });
  
    // Hacer clic en el botón de búsqueda
    fireEvent.click(searchButton);
  
    // Esperar que se haya llamado a la función useNavigate con la URL correcta
    expect(mockNavigate).toHaveBeenCalledWith("/search-results?name=Super Mario");
  });