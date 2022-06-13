import React from "react";
import { FaFire, FaPoo } from "react-icons/fa";
import { BsPlus, BsFillLightningFill } from "react-icons/bs";

function SideBar() {
	return (
		<div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg'>
			<SideBarIcon icon={<FaFire size='28' />} />
			<SideBarIcon icon={<BsPlus size='32' />} />
			<SideBarIcon icon={<BsFillLightningFill size='20' />} />
			<SideBarIcon icon={<FaPoo size='20' />} />
		</div>
	);
}

const SideBarIcon = ({ icon, text = "tooltip 💡" }) => {
	return (
		<div className='sidebar-icon group'>
			{icon} <span class='sidebar-tooltip group-hover:scale-100'>{text}</span>
		</div>
	);
};

export default SideBar;
