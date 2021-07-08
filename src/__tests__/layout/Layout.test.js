import { render, screen } from '@testing-library/react';

import Layout from '../../components/layout/Layout';
import '@testing-library/jest-dom/extend-expect';


test('<Layout /> Verifica que el componente exista', () => {
    render (<Layout />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
});