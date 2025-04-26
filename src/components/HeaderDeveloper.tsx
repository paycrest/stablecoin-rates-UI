import { FileCode, House } from 'lucide-react'
import Header from './Header'

export function HeaderDeveloper() {
  return (
    <section>
      <Header />

      <div className="max-w-[546px] mx-auto pt-7 pb-9 px-4">
        <div className="flex text-white/50 gap-4 text-[12px] items-center pb-9">
          <div className="flex items-center gap-2">
            <House />
            Home
          </div>
          <span className="text-[12px]">/</span>
          <div className="flex items-center gap-2">
            <FileCode />
            Docs
          </div>
        </div>

        <h3 className="text-white text-[22px] font-medium">For Developers</h3>
        <p className="text-white/50 text-[14px] pt-2">
          Get rate data rates.noblocks.xyz/for_developers
        </p>
      </div>
    </section>
  )
}
