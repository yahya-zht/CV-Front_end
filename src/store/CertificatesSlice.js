import { createSlice } from "@reduxjs/toolkit";

export const CertificatesSlice = createSlice({
  name: "Internships",
  initialState: {
    formCertificates: false,
  },
  reducers: {
    toggleformCertificates: (state) => {
      state.formCertificates = !state.formCertificates;
    },
  },
});

export const { toggleformCertificates } = CertificatesSlice.actions;
export default CertificatesSlice.reducer;
