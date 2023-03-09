import Link from 'next/link'
import React from 'react'

function MenuItem({title, address, Icon}) {
  return (
    <div>
        <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
            <Icon className="text-2xl mx-4 sm:hidden"/>
            <div className="hidden sm:inline my-2 text-sm">{title}</div>
        </Link>
    </div>
  )
}

export default MenuItem