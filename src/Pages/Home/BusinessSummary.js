import React from 'react';
import CountUp from 'react-countup';
import { FaUsers, FaMoneyBillAlt, FaTools } from 'react-icons/fa';
import { MdRateReview } from 'react-icons/md';

const BusinessSummary = () => {
    return (
        <div className='w-4/5 mx-auto my-16'>
            <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
                <div className="stat bg-[#307CA4] text-white">
                    <div className="stat-title flex justify-center text-5xl"><FaUsers /></div>
                    <div className="stat-value  text-center "><CountUp delay={1} end={1000} />+ </div>
                    <div className="stat-desc text-center text-2xl ">CUSTOMERS</div>
                </div>
                <div className="stat bg-[#CDF6D7]">
                    <div className="stat-title flex justify-center text-5xl"><FaMoneyBillAlt /></div>
                    <div className="stat-value text-center"><CountUp delay={1} end={120} />M+ </div>
                    <div className="stat-desc text-center text-2xl ">ANNUAL REVENUE</div>
                </div>
                <div className="stat bg-[#3B2967] text-white">
                    <div className="stat-title flex justify-center text-5xl "><MdRateReview /></div>
                    <div className="stat-value text-center"> <CountUp delay={1} end={33} />K+</div>
                    <div className="stat-desc text-center text-2xl">REVIEWS</div>
                </div>
                <div className="stat bg-[#AF815D] text-white">
                    <div className="stat-title flex justify-center text-5xl"><FaTools /></div>
                    <div className="stat-value text-center"><CountUp delay={1} end={50} />+</div>
                    <div className="stat-desc text-center text-2xl">TOOLS</div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;