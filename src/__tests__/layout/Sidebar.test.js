import { render, screen } from '@testing-library/react';

import Sidebar from '../../components/layout/Sidebar';
import '@testing-library/jest-dom/extend-expect';


test('<Sidebar /> Verifica que el componente tenga las rutas', () => {
    render (<Sidebar />);
    expect(screen.getByText('Pase de Batalla')).toBeInTheDocument();
    expect(screen.getByText('Misiones')).toBeInTheDocument();
    expect(screen.getByText('Noticias')).toBeInTheDocument();
    expect(screen.getByTestId('sidebar-link')).toBeInTheDocument();
    expect(screen.getByTestId('sidebar-link').tagName).toBe('A');

    expect(screen.getByTestId('sidebar-picture')).toBeInTheDocument();
    expect(screen.getByTestId('sidebar-picture').tagName).toBe('IMG');

});