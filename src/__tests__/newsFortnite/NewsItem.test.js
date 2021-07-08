import { render, screen } from '@testing-library/react';

import NewsItem from '../../components/options/newsFortnite/NewsItem';
import '@testing-library/jest-dom/extend-expect';

const newsItem = {
    "title":"Loki",
    "tabTitle":"Revelación del paquete de club de julio",
    "date":"2021-06-29T01:31:03+00:00",
    "body":"Loki, el dios del engaño, se abre paso a punta de engaños para llegar al paquete de club de julio. ¡Próximamente!",
    "image":"https://cdn-live.prm.ol.epicgames.com/prod/Subs_Loki_Announce_M-4da7d79e-228b-4146-968c-dcc6985c290d.jpeg?width=1920"
};

test('<NewsItem /> Verifica que el componente tenga la información', () => {
    render (<NewsItem 
        newsItem={newsItem}
    />);
    expect(screen.getByTestId('item-news')).toBeInTheDocument();
    expect(screen.getByTestId('item-news').tagName).toBe('ARTICLE');

    expect(screen.getByTestId('item-news-header')).toBeInTheDocument();
    expect(screen.getByTestId('item-news-header').tagName).toBe('H3');
    expect(screen.getByTestId('item-news-header').textContent).not.toBeNull();

    expect(screen.getByTestId('item-news-picture')).toBeInTheDocument();
    expect(screen.getByTestId('item-news-picture').tagName).toBe('IMG');

    expect(screen.getByTestId('item-news-text')).toBeInTheDocument();
    expect(screen.getByTestId('item-news-text').tagName).toBe('P');
    expect(screen.getByTestId('item-news-text').textContent).not.toBeNull();

    expect(screen.getByTestId('item-news-subtitle')).toBeInTheDocument();
    expect(screen.getByTestId('item-news-subtitle').tagName).toBe('DIV');
    expect(screen.getByTestId('item-news-subtitle').textContent).not.toBeNull();

    expect(screen.getByTestId('item-news-footer')).toBeInTheDocument();
    expect(screen.getByTestId('item-news-footer').tagName).toBe('FOOTER');
    expect(screen.getByTestId('item-news-footer').textContent).not.toBeNull();
});