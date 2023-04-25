import { render, screen } from '@testing-library/react';
import { Button } from '@/shared/ui/Button/Button';
import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
});
