"use client";

import React from 'react';
import { Sheet } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import Link from 'next/link';



const NavLinks = ({isMobileNav = false} : {isMobileNav? : boolean}) => {

    const pathname = usePathname();
    const userId = 1;



    return (
        <>
           
        </>
    );

};

export default NavLinks;