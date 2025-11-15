"use client";
import { DETAILS_PAGE_DETAILS } from "@/assets/data/details-page";
import DetailsLayout from "@/components/layouts/what-we-offer/digital-transformation-layout";
import TextType from "@/components/widgets/Typing-text";
import { useDetailsStore } from "@/store/useDetailsStore";
import { DETAILS_PAGE_PROPS } from "@/utils/types";
import { Backdrop, CircularProgress } from "@mui/material";
import React, { use, useEffect, useState } from "react";

interface DigitalTransformationDetailsProps {
  params: Promise<{
    slug?: string;
  }>;
}

const DigitalTransformationDetails = ({
  params,
}: DigitalTransformationDetailsProps) => {
  // unwrap params promise with React.use()
  const { slug } = use(params);
  const { setData, clearData } = useDetailsStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      if (slug) {
        const filterData = DETAILS_PAGE_DETAILS.find((page) => slug === page.slug);
        if (filterData) {
          setData(filterData as DETAILS_PAGE_PROPS);
        }
      }
      setLoading(false);
    }, 8000); 

    return () => {
      clearTimeout(timer);
      clearData();
    };
  }, [slug, setData, clearData]);

  return (
    <div>
      <Backdrop
        open={loading}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: (theme) => theme.zIndex.modal + 9999,
          backgroundColor: "rgba(0,0,0)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <TextType
            text={[
              "DIGIXITO — Where Ideas Become Digital Reality.",
              "Powering Your Business with Cutting-Edge Digital Solutions.",
            ]}
            loop={false}
            style={{ color: "white", fontSize: 24 }}
          />
          {/* <CircularProgress color="inherit" sx={{ mt: 2 }} /> */}
        </div>
      </Backdrop>

      <DetailsLayout />
    </div>
  );
};

export default DigitalTransformationDetails;
