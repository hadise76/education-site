import StuPanel from '@/app/components/panel/StuPanel'
import React from 'react'

const page = () => {
  return (
    <div>
      {/* شرط بذازیم که اگر type=2معلمه و اگر type=3 دانش آموزه */}
      <StuPanel />
    </div>
  )
}

export default page
