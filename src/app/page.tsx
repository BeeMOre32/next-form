import Image from 'next/image';
import { Divider } from '@nextui-org/react';
import SideNavbar from '@/component/navbar/sideNavbar';

export default function Home() {
  return (
    <div className="flex w-full min-h-screen relative">
      <SideNavbar />
      <Divider orientation="vertical" />
    </div>
  );
}
