import { createSlice } from '@reduxjs/toolkit';

const themes = {
  DARK: 'dark',
  LIGHT: 'light'
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: themes.DARK
  },
  reducers: {
    toggle: (state) => {
      state.value = state.value === themes.DARK ? themes.LIGHT : themes.DARK;
    }
  }
});

export const { toggle } = themeSlice.actions;

export default themeSlice;
