import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { theme } from "../../../public/theme";
const Settings = ({ setOpenSettings }: { setOpenSettings: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="absolute backdrop-blur-lg shadow-2xl border w-60 md:w-100 border-gray-500 top-[50%] z-20 left-[50%] flex flex-col items-center text-white -translate-y-[50%] -translate-x-[50%] p-4 bg-neutral-800/90 rounded-lg space-y-6"
        >
            <button
                className="absolute top-5 right-5 cursor-pointer "
                onClick={() => setOpenSettings(false)}
            >
                <X></X>
            </button>
            <h2 className="text-lg font-semibold tracking-wide">Settings</h2>
            <div className="flex flex-col gap-6 w-full">
                <div className="w-full">
                    <span className="text-sm font-medium">Theme</span>
                    <div className="mt-2 w-full flex flex-col gap-2">
                        {theme.map((theme, idx) => (
                            <div
                                key={idx}
                                className={`${theme.theme} p-3  text-center hover:tracking-wider hover:scale-105 transition-transform duration-200 cursor-pointer rounded-md shadow-md`}
                            >
                                {theme.name}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full flex justify-end">
                    <Link
                        href={"/logout"}
                        className="px-6 py-2 rounded-md text-white border border-red-500 hover:bg-red-500 hover:shadow-lg transition-all duration-200"
                    >
                        Log Out
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default Settings;
