"use client";
import { Search } from "lucide-react";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";

const Sidebar = () => {
  const [locations, setLocations] = useState<string[]>([]);
  const [propertyTypes, setPropertyTypes] = useState<string[]>([]);
  const [propertyStatus, setPropertyStatus] = useState<string[]>([]);
    const [features, setFeatures] = useState<string[]>([]);

  const LOCATIONS = [
    "Kimironko", "Kigali", "Gikondo", "Nyamirambo", "Kicukiro",
    "Remera", "Nyarugenge", "Gasabo", "Rubavu", "Musanze",
    "Huye", "Muhanga", "Burera", "Ngoma", "Rwamagana"
  ];

  const PROPERTY_TYPES = [
    "Apartment", "House", "Villa", "Land", "Commercial"
  ];

    const PROPERTY_STATUS = [
        "Sale", "Rent", "Buy"
    ];

    const FEATURES = ["Swimming Pool", "Gym", "Garden", "Parking", "Security", "Balcony", "Air Conditioning"];

  const toggleLocation = (loc: string) => {
    setLocations((prev) => {
      const updated = prev.includes(loc)
        ? prev.filter((item) => item !== loc)
        : [...prev, loc];
      console.log(updated);
      return updated;
    });
  };

  const togglePropertyTypes = (ptype: string) => {
    setPropertyTypes((prev) => {
      const updated = prev.includes(ptype)
        ? prev.filter((item) => item !== ptype)
        : [...prev, ptype];
      console.log(updated);
      return updated;
    });
  };

  const togglePropertyStatus = (ptype: string) => {
    setPropertyStatus((prev) => {
      const updated = prev.includes(ptype)
        ? prev.filter((item) => item !== ptype)
        : [...prev, ptype];
      console.log(updated);
      return updated;
    });
  };

  const toggleFeatures = (ptype: string) => {
    setFeatures((prev) => {
      const updated = prev.includes(ptype)
        ? prev.filter((item) => item !== ptype)
        : [...prev, ptype];
      console.log(updated);
      return updated;
    });
  };

  return (
    <div className="sticky top-0 min-h-[20em] w-[20em] bg-white border border-[#dde7f7] rounded-sm p-6">
      <div className="relative w-full flex items-center h-14 cursor-text gap-3 bg-[#f7f9fc] border border-[#dde7f7] rounded-sm">
        <Search className="absolute cursor-default left-3 size-5 text-[#bbc9dd]" />
        <input
          type="text"
          placeholder="Keywords..."
          id="search"
          className="w-full h-full outline-none pl-10 pr-3"
        />
      </div>

      <div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>WHERE</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-3 text-sm text-gray-700">
                {LOCATIONS.map((loc) => (
                  <li
                    key={loc}
                    className="flex items-center justify-between border-b pb-1 last:border-b-0"
                  >
                    <span>{loc}</span>
                    <input
                      type="checkbox"
                      name="location"
                      value={loc}
                      checked={locations.includes(loc)}
                      onChange={() => toggleLocation(loc)}
                      className=" h-4 w-4 rounded border-gray-300 text-tdeepblue  focus:ring-green-500 bg-tdeepblue"
                    />
                  </li>
                ))}
              </ul>
              {/* <p className="mt-3 text-xs text-gray-500">
                Selected: {locations.join(", ") || "None"}
              </p> */}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>PROPERTY TYPES</AccordionTrigger>
            <AccordionContent>
            <ul className="space-y-3 text-sm text-gray-700">
                {PROPERTY_TYPES.map((ptype) => (
                  <li
                    key={ptype}
                    className="flex items-center justify-between border-b pb-1 last:border-b-0"
                  >
                    <span>{ptype}</span>
                    <input
                      type="checkbox"
                      name="propertyTypes"
                      value={ptype}
                      checked={propertyTypes.includes(ptype)}
                      onChange={() => togglePropertyTypes(ptype)}
                      className=" h-4 w-4 rounded border-gray-300 text-tdeepblue  focus:ring-green-500 bg-tdeepblue"
                    />
                  </li>
                ))}
              </ul>
              {/* <p className="mt-3 text-xs text-gray-500">
                Selected: {propertyTypes.join(", ") || "None"}
              </p> */}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>PROPERTY STATUS</AccordionTrigger>
            <AccordionContent>
            <ul className="space-y-3 text-sm text-gray-700">
                {PROPERTY_STATUS.map((pstatus) => (
                  <li
                    key={pstatus}
                    className="flex items-center justify-between border-b pb-1 last:border-b-0"
                  >
                    <span>{pstatus}</span>
                    <input
                      type="checkbox"
                      name="propertyStatus"
                      value={pstatus}
                      checked={propertyStatus.includes(pstatus)}
                      onChange={() => togglePropertyStatus(pstatus)}
                      className=" h-4 w-4 rounded border-gray-300 text-tdeepblue  focus:ring-green-500 bg-tdeepblue"
                    />
                  </li>
                ))}
              </ul>
              {/* <p className="mt-3 text-xs text-gray-500">
                Selected: {propertyStatus.join(", ") || "None"}
              </p> */}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>FEATURES</AccordionTrigger>
            <AccordionContent>
            <ul className="space-y-3 text-sm text-gray-700">
                {FEATURES.map((pfeature) => (
                  <li
                    key={pfeature}
                    className="flex items-center justify-between border-b pb-1 last:border-b-0"
                  >
                    <span>{pfeature}</span>
                    <input
                      type="checkbox"
                      name="propertyFeatures"
                      value={pfeature}
                      checked={features.includes(pfeature)}
                      onChange={() => toggleFeatures(pfeature)}
                      className=" h-4 w-4 rounded border-gray-300 text-tdeepblue  focus:ring-green-500 bg-tdeepblue"
                    />
                  </li>
                ))}
              </ul>
              {/* <p className="mt-3 text-xs text-gray-500">
                Selected: {features.join(", ") || "None"}
              </p> */}
            </AccordionContent>
          </AccordionItem>

          <Button
            variant="outline"
            className="w-full border-[#6cb9a8b7] border-2 !py-6 px-10 md:px-20 cursor-pointer rounded bg-[#8fd4dd8f] hover:bg-[#a0f3de8f]/60 hover:text-tcolor text-tcolor text-[16px] font-semibold"
          >
            More Properties
          </Button>
        </Accordion>
      </div>
    </div>
  );
};

export default Sidebar;
