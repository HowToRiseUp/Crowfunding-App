const CampaignItem = () => {
    return (
        <div className="rounded-[15px] shadow">
            <div><img className="w-full max-h-[158px] object-cover rounded-[15px]" src="https://i.pinimg.com/564x/fa/89/c6/fa89c65a15f925dfc18adda3ddae1607.jpg" alt="" />
            </div>
            <div className="p-[20px]">
                <div className="categories flex items-baseline gap-[10px] mb-[15px]">
                    <span>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_2847_1603)">
                                <path d="M6.8775 4.5L8.3775 6H15V13.5H3V4.5H6.8775ZM7.5 3H3C2.175 3 1.5075 3.675 1.5075 4.5L1.5 13.5C1.5 14.325 2.175 15 3 15H15C15.825 15 16.5 14.325 16.5 13.5V6C16.5 5.175 15.825 4.5 15 4.5H9L7.5 3Z" fill="#808191" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2847_1603">
                                    <rect width="18" height="18" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </span>
                    <span className="text-text3 leading-[0]">Education</span>
                </div>
                <div className="text-text1 font-semibold text-base p-1">Powered Kits Learning Boxes</div>
                <div className="text-text3 text-xs mb-[15px]">Fun, durable and reusable boxes with eco-friendly options.</div>
                <div className="flex items-center justify-between mb-5">
                    <div>
                        <div className="text-text1 font-semibold text-sm">$2,000</div>
                        <div className="text-text3 text-xs">Raised of $1,900</div>
                    </div>
                    <div>
                        <div className="text-text1 font-semibold text-sm">173</div>
                        <div className="text-text3 text-xs">Total backers</div>
                    </div>

                </div>
                <div className="flex items-center justify-start gap-[10px]">
                    <div className="w-8 h-8 "><img className="w-full h-full rounded-full" src="https://i.pinimg.com/564x/fa/89/c6/fa89c65a15f925dfc18adda3ddae1607.jpg" alt="" /></div>
                    <span>by <strong>Mahfuzul Nabil</strong></span>
                </div>
            </div>


        </div>
    );
};

export default CampaignItem;