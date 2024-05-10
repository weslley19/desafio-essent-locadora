import Image from "next/image"

const Avatar = (): JSX.Element => {
  return (
    <Image
      src="/pet-triste.png"
      alt="Perfil"
      className="rounded-full"
      width={35}
      height={35}
    />
  )
}

export default Avatar
