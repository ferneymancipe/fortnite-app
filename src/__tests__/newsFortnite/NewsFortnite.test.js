import { render, screen } from '@testing-library/react';

import NewsFortnite from '../../components/options/newsFortnite/NewsFortnite';
import '@testing-library/jest-dom/extend-expect';

test('<NewsFortnite /> Verifica que el componente tenga la información', () => {
    render (<NewsFortnite />);
        
    expect(screen.getByTestId('header')).toBeInTheDocument();

    expect(screen.getByTestId('header-title')).toBeInTheDocument();
    expect(screen.getByTestId('header-title').tagName).toBe('H1');
    expect(screen.getByTestId('header-title').textContent).not.toBeNull();

    expect(screen.getByTestId('header-subtitle')).toBeInTheDocument();
    expect(screen.getByTestId('header-subtitle').tagName).toBe('H2');
    expect(screen.getByTestId('header-subtitle').textContent).not.toBeNull();

    expect(screen.getByTestId('news-fortnite')).toBeInTheDocument();
    expect(screen.getByTestId('news-fortnite').tagName).toBe('MAIN');
});