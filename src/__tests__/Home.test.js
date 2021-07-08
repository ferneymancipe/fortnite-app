import { render, screen } from '@testing-library/react';

import Home from '../components/options/Home';
import '@testing-library/jest-dom/extend-expect';


test('<Home /> Verifica que el componente tenga la información', async () => {
    render (<Home />);

    expect(screen.getByTestId('header')).toBeInTheDocument();

    expect(screen.getByTestId('header-title')).toBeInTheDocument();
    expect(screen.getByTestId('header-title').tagName).toBe('H1');
    expect(screen.getByTestId('header-title').textContent).not.toBeNull();
    expect(screen.getByTestId('header-title').textContent).toBe('Bienvenidos');

    expect(screen.getByTestId('header-subtitle')).toBeInTheDocument();
    expect(screen.getByTestId('header-subtitle').tagName).toBe('H2');
    expect(screen.getByTestId('header-subtitle').textContent).not.toBeNull();
    expect(screen.getByTestId('header-subtitle').textContent).toBe('Tu guía útil de seguimiento de misiones para los jugadores de Fortnite Battle Royale');

    const fortniteMediaItems = screen.findAllByTestId('home-fortnite-media');
    expect(await fortniteMediaItems).toHaveLength(2);

    expect(screen.getByTestId('home-fortnite-carousel')).toBeInTheDocument();
    expect(screen.getByTestId('home-fortnite-carousel').tagName).toBe('SECTION');

    const fortniteCarouselItems = screen.findAllByTestId('home-fortnite-carousel-item');
    expect(await fortniteCarouselItems).toHaveLength(3);

    const fortniteCarouselCaptions = screen.findAllByTestId('home-fortnite-carousel-caption');
    expect(await fortniteCarouselCaptions).toHaveLength(3);
});