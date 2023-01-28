const isSm = useMediaQuery('(min-width: 640px)')
const isMd = useMediaQuery('(min-width: 768px)')
const isLg = useMediaQuery('(min-width: 1024px)')
const isXl = useMediaQuery('(min-width: 1280px)')
const is2Xl = useMediaQuery('(min-width: 1536px)')

export default reactive({ isSm, isMd, isLg, isXl, is2Xl })
