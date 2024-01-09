import { Icon } from '@/lib/iconify-react';
import Image from 'next/image';

export default function NavBar() {
  return (
    <div className="h-[55px]">
      <div className="flex h-full justify-between">
        <div className="flex gap-4">
          <div className="duration-250 flex items-center transition hover:opacity-60">
            <Image src="/images/logo.svg" alt="logo" className="h-6 w-6" width={24} height={24} />
            <span className="text-[var(--vt-c-text-1)]">Vue.js</span>
          </div>

          <div className="group hidden cursor-pointer select-none items-center gap-2.5 md:flex">
            <Icon
              icon="iconamoon:search"
              className="text-[var(--docsearch-muted-color)] transition-colors duration-500 group-hover:text-[var(--vt-c-text-1)]"
              width={16}
              height={16}
            />
            <span className="text-[13px] font-medium text-[var(--docsearch-muted-color)] transition-colors duration-500 group-hover:text-[var(--vt-c-text-1)]">
              Search
            </span>
            <span className="flex h-[22px] items-center gap-0.5 rounded border border-[var(--vt-c-text-3)] px-1.5 text-xs font-medium leading-[22px] text-[var(--vt-c-text-3)] transition-colors duration-500 group-hover:border-[var(--vt-c-brand-light)] group-hover:text-[var(--vt-c-brand-light)]">
              <kbd className="">⌘</kbd>
              <kbd className="">K</kbd>
            </span>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}
