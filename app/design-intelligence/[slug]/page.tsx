"use client";
import { DETAILS_PAGE_DETAILS } from "@/assets/data/details-page";
import DetailsLayout from "@/components/layouts/what-we-offer/digital-transformation-layout";
import { useDetailsStore } from "@/store/useDetailsStore";
import { DETAILS_PAGE_PROPS } from "@/utils/types";
import React, { useEffect, use } from "react";

interface DigitalTransformationDetailsProps {
  params: Promise<{
    slug?: string;
  }>;
}

const DigitalTransformationDetails = ({
  params,
}: DigitalTransformationDetailsProps) => {
  const { slug } = use(params);
  const { setData, data, clearData } = useDetailsStore();
  // const actual_slug = slug?.join("/");

  useEffect(() => {
    if (slug) {
      const filterData = DETAILS_PAGE_DETAILS.find(
        (page) => slug === page.slug
      );

      if (filterData) {
        setData(filterData as DETAILS_PAGE_PROPS);
      }
    }
    return () => {
      clearData();
    };
  }, [slug, setData, clearData]);
  // console.log("data", data);

  return (
    <div>
      <DetailsLayout />
    </div>
  );
};

export default DigitalTransformationDetails;
