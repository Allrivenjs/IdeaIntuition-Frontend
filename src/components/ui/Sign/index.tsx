import {FC, ReactNode} from "react";
import NextLink from "next/link";

interface Sign {
    children: ReactNode;
}

export const Sign: FC<Sign> = ({ children }) => {
    return (
        <li>
            <div className='col-start-10 col-end-12 font-medium gap-3 flex justify-end items-center'>
                {children}
            </div>
        </li>
    );
};