import React from "react";

export const Card = () => {
  return (
    <div className="inline-flex flex-col h-[116px] items-center justify-center gap-[16px] px-[12px] py-[16px] relative bg-[#a6f7e2] rounded-[8px]">
      <div className="inline-flex items-center gap-[90px] relative flex-[0_0_auto] mt-[-1.50px]">
        <div className="flex w-[62px] items-center gap-[6px] relative">
          <img className="relative w-[24px] h-[24px]" alt="Nvidia" src="nvidia-1.svg" />
          <div className="relative w-fit mr-[-7.00px] [font-family:'TWK_Everett-Medium',Helvetica] font-medium text-[#2c2c2c] text-[12px] tracking-[0] leading-[normal]">
            Nvidia
          </div>
        </div>
        <div className="flex flex-col w-[33px] items-end justify-center relative">
          <div className="relative w-fit mt-[-1.00px] ml-[-5.00px] [font-family:'TWK_Everett-Regular',Helvetica] font-normal text-[#2c2c2c] text-[12px] text-right tracking-[0] leading-[normal]">
            NVDA
          </div>
          <div className="relative w-fit ml-[-2.00px] [font-family:'TWK_Everett-Regular',Helvetica] font-normal text-[#77b900] text-[12px] text-right tracking-[0] leading-[normal]">
            +5.63
          </div>
        </div>
      </div>
      <div className="inline-flex items-center gap-[34px] relative flex-[0_0_auto] mb-[-1.50px]">
        <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'TWK_Everett-Regular',Helvetica] font-normal text-[#828282] text-[12px] tracking-[0] leading-[normal]">
            Current Value
          </div>
          <div className="relative w-fit [font-family:'TWK_Everett-Medium',Helvetica] font-medium text-[#2c2c2c] text-[18px] tracking-[0] leading-[normal]">
            $203.65
          </div>
        </div>
        <img className="relative w-[79px] h-[24.11px] mr-[-0.50px]" alt="Group" src="group-3.png" />
      </div>
    </div>
  );
};
