import React from "react";
import DriverForm from "../components/Drivers/DriverForm";

export default function DriverCareForm() {
  const ServiceCode = "DRIVER_D";
  const Service = "長照專車";

  return <DriverForm Service={Service} ServiceCode={ServiceCode}></DriverForm>;
}
