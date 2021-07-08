import { render, screen } from '@testing-library/react';

import Header from '../../components/layout/Header';
import '@testing-library/jest-dom/extend-expect';

test('<Header /> Verifica que el componente tenga la información', () => {
    render (<Header
        title="Pase de Batalla"
        subtitle="Observa toda la lista de recompensas de la temporada"
    />);
    expect(screen.getByTestId('header')).toBeInTheDocument();

    expect(screen.getByTestId('header-title')).toBeInTheDocument();
    expect(screen.getByTestId('header-title').tagName).toBe('H1');
    expect(screen.getByTestId('header-title').textContent).not.toBeNull();

    expect(screen.getByTestId('header-subtitle')).toBeInTheDocument();
    expect(screen.getByTestId('header-subtitle').tagName).toBe('H2');
    expect(screen.getByTestId('header-subtitle').textContent).not.toBeNull();

});