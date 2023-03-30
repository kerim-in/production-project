import { StateSchema } from 'app/providers/StoreProvider';

export const getLoadingIsLoading = (state: StateSchema) => state.loginForm?.isLoading || false;
