import { createSlice } from "@reduxjs/toolkit";

export const CertificatesSlice = createSlice({
  name: "Internships",
  initialState: {
    formCertificates: false,
    CertificateData: {},
    CertificatesList: [],
  },
  reducers: {
    toggleformCertificates: (state) => {
      state.formCertificates = !state.formCertificates;
    },
    setCertificateData: (state, action) => {
      state.CertificateData = action.payload;
    },
    setCertificatesList: (state, action) => {
      state.CertificatesList = action.payload;
    },
  },
});

export const { toggleformCertificates } = CertificatesSlice.actions;
export const { setCertificateData } = CertificatesSlice.actions;
export const { setCertificatesList } = CertificatesSlice.actions;
export default CertificatesSlice.reducer;
