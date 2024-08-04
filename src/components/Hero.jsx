import { COLORS } from "@/constants/theme";
import { Button } from "@mui/material";
import React from "react";
import SlideImgHero from "./SlideImgHero";
import Link from "next/link";
export default function Hero() {
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
          >
            <Link href={"/create"}>Create my CV</Link>
          </Button>
        </div>
      </div>
      <div className="w-1/2">
        <SlideImgHero />
      </div>
    </div>
  );
}
