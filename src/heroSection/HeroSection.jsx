import React from "react";
import { FaPlus } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="bg-base-200">
      <div className="hero-content text-center w-10/12 mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold pt-15">
            Friends to keep close in your life
          </h1>
          <p className="py-6 text-[#64748B] text-[19px] md:text-[21px] lg:text-[23px]">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the <br />
            relationships that matter most.
          </p>
          <button className="btn text-white bg-[#244D3F] hover:bg-[#206750]">
            <FaPlus />
            Add a Friend
          </button>
        </div>
      </div>

      <div className="mt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-10/12 mx-auto gap-5 text-center">
        <div className="card bg-white card-xs shadow-sm">
        <div className="card-body p-6">
          <h2 className="font-semibold text-[#244D3F] text-[42px]">10</h2>
          <p className="text-[#64748B] text-[22px]">
            Total Friends
          </p>
        </div>
      </div>

      <div className="card bg-white card-xs shadow-sm">
        <div className="card-body p-6">
          <h2 className="font-semibold text-[#244D3F] text-[42px]">3</h2>
          <p className="text-[#64748B] text-[22px]">
            On Track
          </p>
        </div>
      </div>

      <div className="card bg-white card-xs shadow-sm">
        <div className="card-body p-6">
          <h2 className="font-semibold text-[#244D3F] text-[42px]">6</h2>
          <p className="text-[#64748B] text-[22px]">
            Need Attention
          </p>
        </div>
      </div>

      <div className="card bg-white card-xs shadow-sm">
        <div className="card-body p-6">
          <h2 className="font-semibold text-[#244D3F] text-[42px]">12</h2>
          <p className="text-[#64748B] text-[22px]">
            Interactions This Month
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default HeroSection;
