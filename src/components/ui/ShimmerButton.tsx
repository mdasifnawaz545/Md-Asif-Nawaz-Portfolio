
import React from 'react'

type props = {
  title: string,
  position: string,
  icon: React.ReactNode
}

function ShimmerButton({ title, position, icon }: props) {
  return (
    <button className="text-center scale-110 mt-4 lg:m-0 lg:scale-90 inline-flex h-10 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors">
      {position === 'left' && icon}
      {title}
      {position === 'right' && icon}
    </button>
  )
}

export default ShimmerButton

