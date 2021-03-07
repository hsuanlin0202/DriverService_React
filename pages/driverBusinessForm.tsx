import React from "react";
import DriverForm from "../components/Drivers/DriverForm";

export default function DriverBusinessForm() {
  const ServiceCode = "DRIVER_B";
  const Service = "商務專車";

  return <DriverForm Service={Service} ServiceCode={ServiceCode}></DriverForm>;
}
