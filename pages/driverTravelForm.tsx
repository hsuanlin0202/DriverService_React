import React from "react";
import DriverForm from "../components/Drivers/DriverForm";

export default function DriverTravelForm() {
  const ServiceCode = "DRIVER_T";
  const Service = "旅遊專車";

  return <DriverForm Service={Service} ServiceCode={ServiceCode}></DriverForm>;
}
