"use client";

import React, { useRef, useEffect, useState } from "react";
import { SpeedDial } from "primereact/speeddial";
import { Toast } from "primereact/toast";
import { ScrollTop } from 'primereact/scrolltop';

import "primeicons/primeicons.css";

export default function SpeedDials() {
  const toast = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const [speedDialOpen, setSpeedDialOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const items = isClient
    ? [
        {
          label: "Mobile",
          icon: "pi pi-phone",
          command: () => {
            window.open("tel:9150547979 ");
          },
          className:
            "rounded-full transition-all duration-[0.2s] ease-out group-hover:-translate-x-1 group-hover:-translate-y-10 flex  bg-blue-500 hover:opacity-90 text-white p-3 text-2xl",
          style: { backgroundColor: "#1D4ED8", color: "#fff" },
        },
        {
          label: "Whatsapp",
          icon: "pi pi-whatsapp",
          command: () => {
            window.open("https://wa.me/9150547979", "_blank");
            // window.open("https://wa.link/f5qsnc", "_blank");
          },
          className:
            "rounded-full transition-all duration-[0.2s] ease-out group-hover:-translate-x-1 group-hover:-translate-y-40 flex  bg-green-500 hover:opacity-90 text-white p-3 text-2xl",
          style: { backgroundColor: "#10B981", color: "#fff" },
        },
        {
          label: "Mail",
          icon: "pi pi-envelope",
          command: () => {
            window.open("mailto:ceo@auraveritas.in", "_blank");
          },
          className:
            "rounded-full transition-all duration-[0.2s] ease-out group-hover:-translate-x-1 group-hover:-translate-y-40 flex  bg-red-500 hover:opacity-90 text-white p-3 text-2xl",
          style: { backgroundColor: "#EF4444", color: "#fff" },
        },
      ]
    : [];

  return (
    <div className="card">
      <div className="flex flex-col justify-end h-full relative">
      
          <ScrollTop
            threshold={100}
            className="w-12 h-12 rounded-full bg-[#447ab1] flex items-center justify-center shadow-lg fixed bottom-20 right-8"
            icon="pi pi-arrow-up text-white text-lg"
          />
        
        
        {/* SpeedDial button */}
     
      </div>
    </div>
  );
}
