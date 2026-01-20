"use client";
import { DETAILS_PAGE_DETAILS } from "@/assets/data/details-page";
import DetailsLayout from "@/components/layouts/what-we-offer/digital-transformation-layout";
import { useDetailsStore } from "@/store/useDetailsStore";
import { DETAILS_PAGE_PROPS } from "@/utils/types";
import React, { useEffect, useState } from "react";
import TextType from "@/components/widgets/Typing-text";
import { Backdrop } from "@mui/material";

interface DigitalTransformationDetailsProps {
  params: {
    slug?: string;
  };
}

const DigitalTransformationDetails = ({
  params,
}: DigitalTransformationDetailsProps) => {
  const { slug } = params;
  const { setData, clearData } = useDetailsStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      if (slug) {
        const filterData = DETAILS_PAGE_DETAILS.find(
          (page) => slug === page.slug,
        );

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
      {loading && (
        <Backdrop
          open={loading}
          sx={{
            zIndex: (theme) => theme.zIndex.modal + 9999,
            backgroundColor: "#000000",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextType
            text={[
              "DIGIXITO — Where Ideas Become Digital Reality.",
              "Powering Your Business with Cutting-Edge Digital Solutions.",
            ]}
            // text={["Text typing effect", "for your websites", "Happy coding!"]}
            loop={false}
            style={{ color: "white", fontSize: "24px" }}
          />
        </Backdrop>
      )}

      {!loading && <DetailsLayout />}
    </div>
  );
};

export default DigitalTransformationDetails;
