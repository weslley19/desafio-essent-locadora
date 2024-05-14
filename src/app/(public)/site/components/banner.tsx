import Image from 'next/image'

interface BannerProps {
  children?: React.ReactNode
}

const Banner = ({ children }: BannerProps): JSX.Element => {
  return (
    <Image
      src={'https://images5.alphacoders.com/913/913734.jpg'}
      alt="Netflix"
      className="h-svh w-full bg-cover"
      width={5000}
      height={5000}
    />
  )
}

export default Banner
