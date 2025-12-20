export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#0f0f12] via-[#12141a] to-[#0b0c10] text-gray-300">
      <div className="px-6 md:px-16 lg:px-24 xl:px-32">
        <div className="flex flex-col md:flex-row items-start justify-center gap-10 py-12 border-b border-white/10">
          
          {/* LEFT */}
          <div className="max-w-96">
            {/* LOGO */}
            <h2 className="font-bold text-2xl cursor-pointer bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
              Darkstone
            </h2>

            <p className="mt-6 text-sm text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-3 mt-4">
              {/** Twitter */}
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M19.167 2.5a9.1 9.1 0 0 1-2.617 1.275 3.733 3.733 0 0 0-6.55 2.5v.833a8.88 8.88 0 0 1-7.5-3.775s-3.333 7.5 4.167 10.833a9.7 9.7 0 0 1-5.834 1.667C8.333 20 17.5 15.833 17.5 6.25q0-.35-.067-.692A6.43 6.43 0 0 0 19.167 2.5"
                    stroke="#9CA3AF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              {/** GitHub */}
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M7.5 15.833c-4.167 1.25-4.167-2.084-5.833-2.5m11.666 5v-3.225a2.8 2.8 0 0 0-.783-2.175c2.616-.292 5.366-1.283 5.366-5.833a4.53 4.53 0 0 0-1.25-3.125 4.22 4.22 0 0 0-.075-3.142s-.983-.292-3.258 1.233a11.15 11.15 0 0 0-5.833 0C5.225.541 4.242.833 4.242.833a4.22 4.22 0 0 0-.075 3.142 4.53 4.53 0 0 0-1.25 3.15c0 4.516 2.75 5.508 5.366 5.833a2.8 2.8 0 0 0-.783 2.15v3.225"
                    stroke="#9CA3AF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              {/** LinkedIn */}
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M13.333 6.667a5 5 0 0 1 5 5V17.5H15v-5.833a1.667 1.667 0 0 0-3.334 0V17.5H8.333v-5.833a5 5 0 0 1 5-5M5 7.5H1.667v10H5zM3.333 5a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333"
                    stroke="#9CA3AF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full md:w-1/2 flex flex-wrap md:flex-nowrap justify-between gap-10">
            <div>
              <h2 className="font-semibold text-gray-200 mb-5">
                RESOURCES
              </h2>
              <ul className="text-sm text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Community</a></li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-gray-200 mb-5">
                COMPANY
              </h2>
              <ul className="text-sm text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <p className="py-5 text-center text-xs md:text-sm text-gray-500">
          © 2024 Darkstone. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
