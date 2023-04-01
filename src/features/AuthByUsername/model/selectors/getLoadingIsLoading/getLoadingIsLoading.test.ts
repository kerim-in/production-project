import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoadingIsLoading } from './getLoadingIsLoading';

describe('getLoginIsLoading.test.ts', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoadingIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoadingIsLoading(state as StateSchema)).toEqual(false);
    });
});
