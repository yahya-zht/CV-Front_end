import { createSlice } from "@reduxjs/toolkit";

export const CertificatesSlice = createSlice({
  name: "Internships",
  initialState: {
    formCertificates: false,
    Title: "",
    Edit: "",
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
    setCertificatesTitle: (state, action) => {
      state.Title = action.payload;
    },
    setEdit: (state, action) => {
      state.Edit = action.payload;
    },
  },
});

export const {
  toggleformCertificates,
  setCertificateData,
  setCertificatesList,
  setCertificatesTitle,
  setEdit,
} = CertificatesSlice.actions;
export default CertificatesSlice.reducer;
