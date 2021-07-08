import { render, screen } from '@testing-library/react';

import Footer from '../../components/layout/Footer';
import '@testing-library/jest-dom/extend-expect';


test('<Footer /> Verifica que el componente tenga la información', () => {
    render (<Footer />);
    expect(screen.getByText('Edgar Mancipe')).toBeInTheDocument();
    expect(screen.getByTestId('footer-text')).toBeInTheDocument();
    expect(screen.getByTestId('footer-text').tagName).toBe('SPAN');
});