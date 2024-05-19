import { RootState } from '../store';

export const casesSelector = (state: RootState) => state.cases.cases;
export const isLoadingSelector = (state: RootState) => state.cases.isLoading;
