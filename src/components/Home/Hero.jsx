"use client";
import { COLORS } from "@/constants/theme";
import { Button } from "@mui/material";
import React from "react";
import SlideImgHero from "../Creation/SlideImgHero";
import Link from "next/link";
import { setTemplateSelected } from "@/store/TemplatesSlice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
export default function Hero() {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleTemplateClick = () => {
    dispatch(setTemplateSelected(1));
    router.push(`/create`);
  };
  return (
    <div className="flex flex-row mx-10 my-12">
      <div className="w-1/2 p-10 flex flex-col justify-center">
        <h1 className="font-bold text-5xl text-center ">
          Create your professional CV
        </h1>
        <p className="font-semibold text-xl text-center my-10">
          Fill out the form, choose a template, and download your CV in a few
          minutes.
        </p>
        <div className="flex justify-center">
          <Button
            variant="contained"
            size="large"
            style={{
              color: COLORS.bg,
              backgroundColor: COLORS.primary,
            }}
            onClick={() => handleTemplateClick()}
          >
            <p>Create my CV</p>
          </Button>
        </div>
      </div>
      <div className="w-1/2">
        <SlideImgHero />
      </div>
    </div>
  );
}
