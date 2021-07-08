import React from "react";

import { render, screen } from '@testing-library/react';

import BattlePassFortnite from '../../components/options/battlePass/BattlePassFortnite';
import '@testing-library/jest-dom/extend-expect';

test('<BattlePassFortnite /> Verifica que el componente tenga la información', async () => {
    render (<BattlePassFortnite />);
    
    expect(screen.getByTestId('header')).toBeInTheDocument();

    expect(screen.getByTestId('header-title')).toBeInTheDocument();
    expect(screen.getByTestId('header-title').tagName).toBe('H1');
    expect(screen.getByTestId('header-title').textContent).not.toBeNull();

    expect(screen.getByTestId('header-subtitle')).toBeInTheDocument();
    expect(screen.getByTestId('header-subtitle').tagName).toBe('H2');
    expect(screen.getByTestId('header-subtitle').textContent).not.toBeNull();

    expect(screen.getByTestId('battle-pass-fortnite')).toBeInTheDocument();
    expect(screen.getByTestId('battle-pass-fortnite').tagName).toBe('MAIN');
});