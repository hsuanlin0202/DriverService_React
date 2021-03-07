import React from "react";
import LayoutMobile from "../components/LayoutMobile";
import Button from "../components/Drivers/DriverButton";
import DriverContent from "../components/Drivers/DriverContent";

const color = "blue-700";
const bgColor = "bg-white";
export default function DriverBusiness() {
  return (
    <LayoutMobile title="商務專車" bgColor={bgColor}>
      <DriverContent
        video="https://www.youtube.com/embed/jitgDO0w-_o?controls=0"
        title="外地出差、異地辦公。專業選擇"
        content={{
          items: [
            {
              title: "服務介紹：",
              content:
                "外地出差但不想自行開車前往，公司無公務車也無專屬駕駛該如何是好？　公司商務專車服務專為企業、商務人士量身打造，提供點對點的單趟接送及以時計價的接送方式，供您選擇。",
            },
            {
              title: "實際故事案例：",
              content:
                "第一次透過公司GoSmart APP預約商務專車服務時，駕駛的服務品質真的讓人讚嘆。使用服務的當天，因開會時間較為延誤，讓司機等了一陣子。但司機在第一通電話確認完時間會延誤些後，就沒再打電話來催促。不僅耐心的等候外，乘坐的體驗也非常安心舒適，是出差交通的不錯選擇。",
            },
            {
              title: "策略夥伴：",
              content:
                "台灣諾華、羅氏大藥廠、Ericsson、KKBOX、國立台灣大學…等。",
            },
          ],
        }}
        color={color}
      />
      <div className="w-full h-32"></div>
      <Button color={color} href="/driverBusinessForm">
        立即預約
      </Button>
      <span id="acctid" className="hidden"></span>
      <button className="hidden" id="flutterCall" onClick={() => {}}></button>
    </LayoutMobile>
  );
}
